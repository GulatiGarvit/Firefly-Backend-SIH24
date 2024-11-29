const { Incident } = require("../models");

const createIncident = async (node, building, extras) => {
    const incident = await node.createIncident({
        extras: data,
        buildingId: building.id,
    });
    return incident;
};

const getLatestIncidentByBuilding = async (buildingId) => {
    const incident = await Incident.findOne({
        where: { buildingId },
        order: [["createdAt", "DESC"]],
    });
    return incident;
};

const getUsersByIncident = async (incidentId) => {
    const incident = await Incident.findByPk(incidentId);
    if (!incident) throw new Error("Incident not found");

    const users = await incident.getUsers();
    return users;
};

const getNavigatingUsersFromIncident = async (incidentId) => {
    const incident = await Incident.findByPk(incidentId);
    if (!incident) throw new Error("Incident not found");

    const users = await incident.getUsers({
        where: { isNavigating: true },
    });
    return users;
};

const getIncidentById = async (incidentId) => {
    const incident = await Incident.findByPk(incidentId);
    return incident;
};

const getStuckUsersFromIncident = async (incidentId) => {
    const incident = await Incident.findByPk(incidentId);
    if (!incident) throw new Error("Incident not found");

    const users = await incident.getUsers({
        where: { canEscape: false },
    });
    return users;
};

const getUsersInsideBuildingFromIncident = async (incidentId) => {
    const incident = await Incident.findByPk(incidentId);
    if (!incident) throw new Error("Incident not found");

    const users = await incident.getUsers({
        where: { isInside: true },
    });
    return users;
};

module.exports = {
    createIncident,
    getLatestIncidentByBuilding,
    getUsersByIncident,
    getNavigatingUsersFromIncident,
    getIncidentById,
    getStuckUsersFromIncident,
    getUsersInsideBuildingFromIncident,
};
