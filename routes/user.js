const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");
const Middlewares = require("../middlewares");

router.post("/", UserController.registerUser);
router.get("/", Middlewares.userExists, UserController.getUser);

module.exports = router;
