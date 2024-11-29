const errorMiddleware = require("./error");
const userExists = require("./user_exists");
const firefighterExists = require("./firefighter_exists");

module.exports = { errorMiddleware, userExists, firefighterExists };
