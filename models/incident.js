const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const Enums = require("../config/enums");

// Fire incident
const Incident = sequelize.define(
    "incident",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        extras: {
            type: DataTypes.JSON,
        },
        spreadRate: {
            type: DataTypes.STRING,
        },
        spreadRateUnit: {
            type: DataTypes.STRING,
        },
        extinguishEffort: {
            type: DataTypes.ENUM(Object.values(Enums.ExtinguishEffort)),
            defaultValue: Enums.ExtinguishEffort.LOW,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        underscored: true,
        timestamps: true,
    }
);

module.exports = Incident;
