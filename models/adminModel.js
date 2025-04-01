/**
 * 
 * Class For Admin Model Using The Sequelize Package
 * 
 */

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db")


class Admin extends Model { }


// - - - - - - - - - ADMIN MODEL INITIALIZATION - - - - - - - - -

Admin.init(
    {
        adminID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        adminNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "userID"
            }
        }
    },
    {
        sequelize,
        modelName: "Admin",
        tableName: "admin",
        timestamps: false
    }
);

module.exports = Admin;