const router = require("express").Router();

// User route
router.use("/user", require("./user"));

// Firefighter route
router.use("/firefighter", require("./firefighter"));

// Node route
router.use("/nodes", require("./node"));

module.exports = router;
