const router = require("express").Router();

// User route
router.use("/user", require("./user"));

// Firefighter route
router.use("/firefighter", require("./firefighter"));

// Node route
router.use("/nodes", require("./node"));

// Incident route
router.use("/incident", require("./incident"));

// Fire station route
router.use("/firestation", require("./fire_station"));

module.exports = router;
