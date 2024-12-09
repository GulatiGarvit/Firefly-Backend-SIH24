const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const FireStation = sequelize.define(
	"fireStation",
	{
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phoneNumber: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		latlng: {
			type: DataTypes.GEOMETRY("POINT"),
			allowNull: false,
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

module.exports = FireStation;
