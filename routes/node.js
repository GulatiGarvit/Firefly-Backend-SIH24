const router = require("express").Router();
const NodeController = require("../controllers/node");

router.post("/caught-fire", NodeController.handleCaughtFire);

router.get("/building/:id", NodeController.getAllNodesForBuilding);

module.exports = router;
