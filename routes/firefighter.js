const router = require("express").Router();

const Middlewares = require("../middlewares");
const FirefighterController = require("../controllers/firefighter");

router.post("/", FirefighterController.registerFirefighter);

router.use(Middlewares.firefighterExists);

router.get("/", FirefighterController.getFirefighter);
router.patch("/", FirefighterController.updateFirefighter);
router.get("/incident", FirefighterController.getIncidentAssignedToFirefighter);

module.exports = router;