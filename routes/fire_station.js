const router = require("express").Router();

const Middlewares = require("../middlewares");

const FirestationController = require("../controllers/fire_station");

router.post("/", FirestationController.registerFireStation);

router.use(Middlewares.fireStationExists);

router.get("/", FirestationController.getFireStation);
router.patch("/", FirestationController.updateFireStation);
router.get("/incidents", FirestationController.getIncidentsForFireStation);
router.get("/firefighters", FirestationController.getFirefightersForFireStation);

module.exports = router;
