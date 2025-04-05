/**
 * 
 * Class For Loan Model Using The Sequelize Package
 * 
 */

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const moment = require("moment");


class Loan extends Model { }

// - - - - - - - - - LOAN MODEL INITIALIZATION - - - - - - - - -

Loan.init(
    {
        loanID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        loanAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        loanInterest: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        loanStartDate: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue("loanStartDate").format("YYYY-MM-DD"));
            }
        },
        loanEndDate: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue("loanEndDate").format("YYYY-MM-DD"))
            }
        },
        loanStatus: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: "Loan",
        tableName: "loan",
        timestamps: false
    }
);


module.exports = Loan;