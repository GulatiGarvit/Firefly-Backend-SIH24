const router = require("express").Router();
const NodeRouter = require("./node");

router.use("/:buildingId/node", NodeRouter);

module.exports = router;
