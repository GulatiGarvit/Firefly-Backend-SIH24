const router = require("express").Router({ mergeParams: true });
const NodeController = require("../controllers/node");

router.post("/caught-fire", NodeController.handleCaughtFire);

router.get("/", NodeController.getAllNodesForBuilding);

router.post("/bulk", NodeController.createNodesInBulk);

router.post("/data", NodeController.handleData);

module.exports = router;
