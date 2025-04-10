/**
 * 
 * Class For Customer Model Using The Sequelize Package
 * 
 */

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const moment = require("moment");

class Customer extends Model { }

// - - - - - - - - - CUSTOMER MODEL INITIALIZATION - - - - - - - - -


Customer.init(
    {
        customerID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        customerBalance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customerDateOpened: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue('customerDateOpened')).format('YYYY-MM-DD');
            }
        },
        customerDateClosed: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        customerTaxID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true    // A Unqiue Identifier For Every Customer
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "userID"
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    },
    {
        sequelize,
        modelName: "Customer",
        tableName: "customer",
        timestamps: false
    }
);


module.exports = Customer;