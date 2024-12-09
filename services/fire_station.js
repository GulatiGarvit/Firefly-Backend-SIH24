const { sequelize, FireStation } = require("../models");
const NotificationService = require("./notification");

const createAlertForIncident = async (incident) => {
	// Get the incident's building id
	const buildingId = incident.buildingId;

	// Run Geometry query to find nearest fire station to the building (comparing their latlng)
	// Using SQL's Geometry("Point") functions
	const nearestFireStation = await sequelize.query(
		`
        SELECT * 
        FROM fire_stations 
        ORDER BY ST_Distance(
            latlng, 
            (SELECT latlng FROM buildings WHERE id = :buildingId)
        ) 
        LIMIT 1
        `,
		{
			replacements: { buildingId }, // Pass the buildingId safely into the query
			type: sequelize.QueryTypes.SELECT, // Specify query type for SELECT
			mapToModel: true, // Map the result to the FireStation model
			model: FireStation,
		}
	);

	// TODO: Formulate the message
	const message = {};

	// Notify the fire station's
	// Nearest firestion to be added to incident
	console.log(nearestFireStation[0].id);
	console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
	incident.fireStationId = nearestFireStation[0].id;
	console.log(incident.fireStationId);
	await incident.save();
	await NotificationService.sendNotification(
		nearestFireStation[0].fcmToken,
		message
	);
};

module.exports = {
	createAlertForIncident,
};
