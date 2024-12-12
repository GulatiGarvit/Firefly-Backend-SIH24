const { Building, Incident } = require("../models");

const getBuildingById = async (req, res, next) => {
    const buildingId = req.params.id;
    if (!buildingId) {
        return res.status(400).json({ message: "Building ID is required" });
    }

    const building = await Building.findByPk(buildingId);
    // Check if building is on fire, by checking if there's an active incident
    const activeIncident = await Incident.findOne({
        where: {
            isActive: true,
            buildingId: building.id,
        },
    });
    if (activeIncident) {
        building.dataValues.isOnFire = true;
        building.dataValues.activeIncident = activeIncident;
    } else {
        building.dataValues.isOnFire = false;
    }
    res.status(200).json({ building });
};

module.exports = {
    getBuildingById,
};
