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
    const data = {
        incidentId: incident.id.toString(),
    };

    // For each user in users send notif
    for (let user of users) {
        await NotificationService.sendNotification(user.fcmToken, data);
    }
};

module.exports = {
    createAlertForIncident,
};
