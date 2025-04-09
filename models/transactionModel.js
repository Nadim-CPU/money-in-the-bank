/**
 * 
 * Class For Transaction Model Using The Sequelize Package
 * 
 */


const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const moment = require("moment");

class Transaction extends Model { }

// - - - - - - - - - TRANSACTION MODEL INITIALIZATION - - - - - - - - -

Transaction.init(
    {
        transactionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        transactionType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transactionAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        transactionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue("transactionDate")).format("YYYY-MM-DD");
            }
        },
        customerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Customer",
                key: "customerID"
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    },
    {
        sequelize,
        modelName: "Transaction",
        tableName: "transaction",
        timestamps: false
    }
);


module.exports = Transaction;