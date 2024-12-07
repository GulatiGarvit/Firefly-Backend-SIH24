const { User } = require("../models");
const IncidentService = require("../services/incident");

const getAllUsersFromIncident = async (req, res) => {
	const incidentId = req.params.id;
	if (!incidentId) {
		return res.status(400).json({ message: "Incident ID is required" });
	}

	const users = await IncidentService.getAllUsersFromIncident(req.params.id);
	res.status(200).json({ users });
};

const getNavigatingUsersFromIncident = async (req, res) => {
	const incidentId = req.params.id;
	if (!incidentId) {
		return res.status(400).json({ message: "Incident ID is required" });
	}

	const users = await IncidentService.getNavigatingUsersFromIncident(
		req.params.id
	);
	res.status(200).json({ users });
};

const getIncidentById = async (req, res) => {
	const incidentId = req.params.id;
	if (!incidentId) {
		return res.status(400).json({ message: "Incident ID is required" });
	}

	const incident = await IncidentService.getIncidentById(req.params.id);
	res.status(200).json({ incident });
};

const getStuckUsersFromIncident = async (req, res) => {
	const incidentId = req.params.id;
	if (!incidentId) {
		return res.status(400).json({ message: "Incident ID is required" });
	}

	const users = await IncidentService.getStuckUsersFromIncident(
		req.params.id
	);
	res.status(200).json({ users });
};

const getUsersInsideBuildingFromIncident = async (req, res) => {
	const incidentId = req.params.id;
	if (!incidentId) {
		return res.status(400).json({ message: "Incident ID is required" });
	}

	const users = await IncidentService.getUsersInsideBuildingFromIncident(
		req.params.id
	);
	res.status(200).json({ users });
};

const getUsersAndIncidentInfo = async (req, res) => {
	const userIds = req.body.users;
	const incidentId = req.body.incident;

	//for each userId, get user metadata
	const users = await User.findAll({
		where: {
			id: userIds,
		},
	});
	// get incident metadata
	const incident = await IncidentService.getIncidentById(incidentId);

	res.status(200).json({ users, incident });
};

module.exports = {
	getAllUsersFromIncident,
	getNavigatingUsersFromIncident,
	getIncidentById,
	getStuckUsersFromIncident,
	getUsersInsideBuildingFromIncident,
	getUsersAndIncidentInfo,
};
