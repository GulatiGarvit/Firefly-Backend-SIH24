const router = require("express").Router();

const Middlewares = require("../middlewares");

const FireStationController = require("../controllers/fire_station");

router.post("/", FireStationController.registerFireStation);

router.use(Middlewares.fireStationExists);

router.get("/", FireStationController.getFireStation);
router.patch("/", FireStationController.updateFireStation);
router.get("/incidents", FireStationController.getIncidentsForFireStation);
router.get(
	"/firefighters",
	FireStationController.getFirefightersForFireStation
);
router.post(
	"/assign-incident",
	FireStationController.assignIncidentToFirefighter
);

module.exports = router;
