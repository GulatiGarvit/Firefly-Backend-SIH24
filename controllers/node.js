const NodeService = require("../services/node");

const handleCaughtFire = async (req, res, next) => {
    // Get node id
    const nodeId = req.body.id;
    // TODO: Get other data
    const data = {};

    incident = await NodeService.handleCaughtFire(nodeId, data);

    res.status(200).json({ incident: incident });
};

const getAllNodesForBuilding = async (req, res, next) => {
    const buildingId = req.params.buildingId;
    const nodes = await NodeService.getAllNodesForBuilding(buildingId);

    res.status(200).json({ nodes });
};

const createNodesInBulk = async (req, res, next) => {
    try {
        const buildingId = req.params.buildingId;
        const nodes = req.body.nodes;

        await NodeService.createNodesInBulk(buildingId, nodes);

        res.status(201).json({ message: "Nodes created" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    handleCaughtFire,
    getAllNodesForBuilding,
    createNodesInBulk,
};
