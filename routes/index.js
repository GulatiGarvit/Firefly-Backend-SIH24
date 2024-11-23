const router = require("express").Router();

// Login route
router.use("login", require("./login"));
// Node route
router.use("nodes", require("./node"));

module.exports = router;
