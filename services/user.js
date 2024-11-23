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
    const message = {};

    // Notify all users
    for (const user of users) {
        await NotificationService.sendNotification(user.fcmToken, message);
    }
};

module.exports = {
    createAlertForIncident,
};
