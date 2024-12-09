const { Node } = require("../models");
const UserService = require("./user");
const FireStationService = require("./fire_station");
const IncidentService = require("./incident");
const firebaseAdmin = require("../config/firebase");

const handleCaughtFire = async (nodeId, data) => {
	// Get the node
	const node = await Node.findByPk(nodeId);
	if (!node) throw new Error("Node not found");

	// Realtime Database
	const db = firebaseAdmin.database();
	// Get the latest incident for this building
	const incident = await IncidentService.getLatestIncidentByBuilding(
		node.buildingId
	);
	if (incident && incident.isActive) {
		// TODO: Mark the node as on fire on Firebase Realtime Database
		// Incident incidentid nodes firenodes set nodeid true
		await db
			.ref(`Incidents/${incident.id}/Nodes/FireNodes/${nodeId}`)
			.set(true);
		return incident;
	}

	// Create an incident
	const newIncident = await IncidentService.createIncident(node, node.buildingId, data);

	await db
		.ref(`Incidents/${newIncident.id}/Nodes/FireNodes/${nodeId}`)
		.set(true);

	// Alert all users in the background
	UserService.createAlertForIncident(newIncident);

	// Alert firestations in the background
	FireStationService.createAlertForIncident(newIncident);
    return newIncident;
};

const getAllNodesForBuilding = async (buildingId) => {
	const nodes = await Node.findAll({
		where: { buildingId },
	});
	return nodes;
};

const createNodesInBulk = async (buildingId, nodes) => {
	nodes = nodes.split("\n");
	nodes = nodes.map((node) => {
		// Split the string by comma and convert to float
		return node.split(",").map((n) => parseFloat(n));
	});
	for (let node of nodes) {
		await Node.create({
			buildingId,
			latlng: { type: "Point", coordinates: node },
		});
	}
};

module.exports = {
	handleCaughtFire,
	createNodesInBulk,
	getAllNodesForBuilding,
};
