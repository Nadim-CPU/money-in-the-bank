/**
 * 
 * Class For User Model Using The Sequelize Package
 * 
 */

const { DataTypes, Model } = require("sequelize");
const moment = require("moment");
const sequelize = require('../config/db');

class User extends Model { }

// - - - - - - - - - USER MODEL INITIALIZATION - - - - - - - - -

User.init(
    {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        userUserName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userLastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPhoneNbr: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userDOB: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue('userDOB')).format('YYYY-MM-DD');
            }
        },
        userAddress: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {   
        sequelize,
        modelName: "User",
        tableName: "user",
        timestamps: false
    }
);

module.exports = User;