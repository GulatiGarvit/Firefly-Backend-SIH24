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
    const building = await IncidentService.getLatestIncidentByBuilding(
        node.buildingId
    );
    if (incident && incident.isActive) {
        // TODO: Mark the node as on fire on Firebase Realtime Database
        await db.ref(`buildings/${node.buildingId}/fireNodes`).push(node.id);

        await db
            .ref(`buildings/${node.buildingId}/nodes/${node.id}`)
            .update({ onFire: true });
        return;
    }

    // Create an incident
    const incident = await IncidentService.createIncident(node, data);

    // TODO: Mark the node as on fire on Firebase
    await db.ref(`buildings/${node.buildingId}/fireNodes`).push(node.id);

    await db
        .ref(`buildings/${node.buildingId}/nodes/${node.id}`)
        .update({ onFire: true });

    // Alert all users in the background
    UserService.createAlertForIncident(incident);

    // Alert firestations in the background
    FireStationService.createAlertForIncident(incident);
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
        node = node.split(",");
    });

    for (let node in nodes) {
        await Node.create({
            buildingId,
            latlng: { type: "Point", coordinates: node },
        });
    }
};

module.exports = {
    handleCaughtFire,
    createNodesInBulk,
};
