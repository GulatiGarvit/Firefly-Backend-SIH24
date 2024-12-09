const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
	"user",
	{
		id: {
			type: DataTypes.STRING,
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
				min: 12,
			},
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		medicalConditions: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		fcmToken: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		underscored: true,
		timestamps: true,
	}
);

module.exports = User;
