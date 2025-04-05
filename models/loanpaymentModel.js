/**
 * 
 * Class For Loan Payment Model Using The Sequelize Package
 * 
 */

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const moment = require("moment");


class LoanPayment extends Model { }

// - - - - - - - - - LOANPAYMENT MODEL INITIALIZATION - - - - - - - - -

LoanPayment.init(
    {
        loanPaymentID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        paidAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        datePaid: {
            type: DataTypes.DATE,
            allowNull: false
        },
        loanID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Loan",
                key: "loanID"
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        transactionID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Transaction",
                key: "transactionID"
            }
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    {
        sequelize,
        modelName: "LoanPayment",
        tableName: "loanpayment",
        timestamps: false
    }
);


module.exports = LoanPayment