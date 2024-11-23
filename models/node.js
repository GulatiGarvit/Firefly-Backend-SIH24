// BLE Node
const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

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
}, );

module.exports = Node;