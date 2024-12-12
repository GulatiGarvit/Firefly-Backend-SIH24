const router = require("express").Router();
const NodeRouter = require("./node");
const BuildingController = require("../controllers/building");

router.use("/:buildingId/node", NodeRouter);

router.get("/:id", BuildingController.getBuildingById);

module.exports = router;
