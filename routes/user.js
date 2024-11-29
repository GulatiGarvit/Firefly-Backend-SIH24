const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");
const Middlewares = require("../middlewares");

router.post("/", UserController.registerUser);
router.use(Middlewares.userExists);
router.get("/", UserController.getUser);

module.exports = router;
