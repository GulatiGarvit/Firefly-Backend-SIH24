const sequelize = require("../config/database");
const User = require("./user");
const City = require("./city");
const Building = require("./building");
const FireStation = require("./fire_station");
const Firefighter = require("./firefighter");
const Incident = require("./incident");
const IncidentUser = require("./incident_user");
const Node = require("./node");

City.hasMany(Building);
Building.belongsTo(City);

City.hasMany(FireStation);
FireStation.belongsTo(City);

City.hasMany(User);
User.belongsTo(City);

FireStation.hasMany(Firefighter);
Firefighter.belongsTo(FireStation);

FireStation.belongsTo(Firefighter, { as: "chief" });

Building.hasMany(Incident);
Incident.belongsTo(Building);

User.belongsToMany(Incident, {
    through: IncidentUser,
    foreignKey: "userId",
    otherKey: "incidentId",
});
Incident.belongsToMany(User, {
    through: IncidentUser,
    foreignKey: "incidentId",
    otherKey: "userId",
});

Firefighter.belongsToMany(Incident, { through: "incident_firefighters" });
Incident.belongsToMany(Firefighter, { through: "incident_firefighters" });

FireStation.hasMany(Incident);
Incident.belongsTo(FireStation);

Building.hasMany(Node);
Node.belongsTo(Building);

// To track which node caused the incident
Node.hasMany(Incident);
Incident.hasOne(Node);

module.exports = {
    User,
    City,
    Building,
    FireStation,
    Firefighter,
    Incident,
    IncidentUser,
    Node,
    sequelize,
};
