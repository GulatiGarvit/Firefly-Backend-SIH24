const { Node } = require("../models");
const UserService = require("./user");
const FireStationService = require("./fire_station");
const IncidentService = require("./incident");

const handleCaughtFire = async (nodeId, data) => {
    // Get the node
    const node = await Node.findByPk(nodeId);
    if (!node) throw new Error("Node not found");

    // Get the latest incident for this building
    const building = await IncidentService.getLatestIncidentByBuilding(
        node.buildingId
    );
    if (incident && incident.isActive) {
        // TODO: Mark the node as on fire on Firebase
        return;
    }

    // Create an incident
    const incident = await IncidentService.createIncident(node, data);

    // TODO: Mark the node as on fire on Firebase

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

module.exports = {
    handleCaughtFire,
};
