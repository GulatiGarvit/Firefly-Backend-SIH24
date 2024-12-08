const router = require("express").Router();

const Middlewares = require("../middlewares");

const FirestationController = require("../controllers/fire_station");

router.use(Middlewares.fireStationExists);

router.get("/", FirestationController.getFireStation);

module.exports = router;
