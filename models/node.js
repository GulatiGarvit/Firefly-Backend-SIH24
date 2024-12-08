// BLE Node
const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const { POI } = require("../config/enums");

const Node = sequelize.define("node", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    latlng: {
        type: DataTypes.GEOMETRY("POINT"),
        allowNull: false,
    },
    poi: {
        type: DataTypes.ENUM(Object.values(POI)),
        allowNull: false,
        defaultValue: POI.NONE.toString(),
    },
    name: {
        type: DataTypes.STRING,
    },
});

module.exports = Node;
