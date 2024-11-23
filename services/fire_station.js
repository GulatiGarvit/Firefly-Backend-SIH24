const { sequelize, FireStation } = require("../models");
const NotificationService = require("./notification");

const createAlertForIncident = async (incident) => {
    // Get the incident's building id
    const buildingId = incident.buildingId;

    // Run Geometry query to find nearest fire station to the building (comparing their latlng)
    // Using SQL's Geometry("Point") functions
    const nearestFireStation = await sequelize.query(
        "SELECT * FROM fire_stations ORDER BY ST_Distance(latlng, (SELECT latlng FROM buildings WHERE id = :buildingId) LIMIT 1",
        {
            mapToModel: true,
        }
    );

    // TODO: Formulate the message
    const message = {};

    // Notify the fire station's chief
    const chief = nearestFireStation.getChief();
    await NotificationService.sendNotification(chief.fcmToken, message);
};

module.exports = {
    createAlertForIncident,
};
