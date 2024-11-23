const NodeService = require("../services/node");

const handleCaughtFire = async (req, res, next) => {
    // Get node id
    const nodeId = req.body.id;
    // TODO: Get other data
    const data = {};

    await NodeService.handleCaughtFire(nodeId, data);

    res.status(200).json({ message: "Incident created" });
};

const getAllNodesForBuilding = async (req, res, next) => {
    const buildingId = req.params.id;
    const nodes = await NodeService.getAllNodesForBuilding(buildingId);

    res.status(200).json({ nodes });
};

module.exports = {
    handleCaughtFire,
    getAllNodesForBuilding,
};
