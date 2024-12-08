const router = require("express").Router();

const Middlewares = require("../middlewares");

const FirestationController = require("../controllers/fire_station");

router.post("/", FirestationController.registerFireStation);

router.use(Middlewares.fireStationExists);

router.get("/", FirestationController.getFireStation);
router.patch("/", FirestationController.updateFireStation);

module.exports = router;
