const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const City = sequelize.define(
    "city",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        area: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        underscored: true,
        timestamps: false,
    }
);

module.exports = City;
