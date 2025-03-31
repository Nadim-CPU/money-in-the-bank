/**
 * 
 * Class For Customer Model Using The 
 * 
 */

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");


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
                return moment(this.getDataValue("customerDateOpened").format("YYYY-MM-DD"));
            }
        },
        customerDateClosed: {
            type: DataTypes.DATE,
            allowNull: true,
            get() {
                return moment(this.getDataValue("customerDateClosed").format("YYYY-MM-DD"));
            }
        },
        customerTaxID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Customer",
        tableName: "customer",
        timestamps: false
    }
);