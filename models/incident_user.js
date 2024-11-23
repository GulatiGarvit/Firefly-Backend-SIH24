const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const User = require("./user");
const Incident = require("./incident");

const IncidentUser = sequelize.define(
    "incidentUser",
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: User,
                key: "id",
            },
        },
        incidentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Incident,
                key: "id",
            },
        },
        isNavigating: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        canEscape: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        isInside: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    },
    {
        timestamps: true,
        underscored: true,
    }
);

module.exports = IncidentUser;
