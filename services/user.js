const { User } = require("../models");
const NotificationService = require("./notification");

const createAlertForIncident = async (incident) => {
	// Find building for the incident (only need city)
	const building = await incident.getBuilding({ include: ["city"] });
	const city = building.city;

	// Find all users in the city
	const users = await User.findAll({
		where: { cityId: city.id },
		attributes: ["fcmToken"],
	});

	// TODO: Formulate the message
	const message = {
		data: {
			gotNewIncident: true,
		},
		// Send to all users in the city
		tokens: users.map((user) => user.fcmToken),
	};

	// Notify all users
	await NotificationService.sendNotification(message);
};

module.exports = {
	createAlertForIncident,
};
