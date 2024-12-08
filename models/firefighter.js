const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Firefighter = sequelize.define(
    "firefighter",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 18,
            },
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        fcmToken: {
            type: DataTypes.STRING,
        },
    },
    {
        underscored: true,
        timestamps: false,
    }
);

module.exports = Firefighter;
