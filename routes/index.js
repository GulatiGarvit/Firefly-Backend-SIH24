const router = require("express").Router();

// User route
router.use("/user", require("./user"));

// Firefighter route
router.use("/firefighter", require("./firefighter"));

// Node route
router.use("/building", require("./building"));

// Incident route
router.use("/incident", require("./incident"));

// Fire station route
router.use("/fire_station", require("./fire_station"));

module.exports = router;
