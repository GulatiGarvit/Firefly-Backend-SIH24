const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");
const Middlewares = require("../middlewares");

router.post("/", UserController.registerUser);

router.use(Middlewares.userExists);

router.get("/", UserController.getUser);
router.patch("/", UserController.updateUser);

router.post("/incident-confirm", UserController.confirmationForIncident);

module.exports = router;
