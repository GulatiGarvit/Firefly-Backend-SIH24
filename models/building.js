const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Building = sequelize.define(
    "building",
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
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latlng: {
            type: DataTypes.GEOMETRY("POINT"),
            allowNull: false,
        },
    },
    {
        initialAutoIncrement: 1000,
        underscored: true,
        timestamps: false,
    }
);

module.exports = Building;
