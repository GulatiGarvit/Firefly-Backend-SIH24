const { FireStation } = require("../models/index");
const firebaseAdmin = require("../config/firebase");
const NotificationService = require("../services/notification");

const getFireStation = async (req, res, next) => {
    try {
        const fire_station = req.fire_station;
        return res.status(200).json({ data: fire_station });
    } catch (e) {
        next(e);
    }
};

const registerFireStation = async (req, res, next) => {
    const { name, phoneNumber, address, email, lat, lng, fcmToken } = req.body;
    var uid;
    try {
        const firebaseAuthToken = req.headers.authorization;
        const decodedToken = await firebaseAdmin
            .auth()
            .verifyIdToken(firebaseAuthToken);
        uid = decodedToken.uid;
    } catch (e) {
        return res.status(403).json({ message: "Invalid token" });
    }
    try {
        const fire_station = await FireStation.create({
            id: uid,
            name,
            phoneNumber,
            address,
            email,
            latlng: {
                type: "Point",
                coordinates: [lng, lat],
            },
            fcmToken,
        });
        return res.status(200).json({ data: fire_station });
    } catch (e) {
        next(e);
    }
};

const updateFireStation = async (req, res, next) => {
    const { name, phoneNumber, address, email, fcmToken } = req.body;
    const fire_station = req.fire_station;
    try {
        const updatedFireStation = await fire_station.update({
            name,
            phoneNumber,
            address,
            email,
            fcmToken,
        });
        return res.status(200).json({ data: updatedFireStation });
    } catch (e) {
        next(e);
    }
};

const getIncidentsForFireStation = async (req, res, next) => {
    const fire_station = req.fire_station;
    try {
        const incidents = await fire_station.getIncidents();
        return res.status(200).json({ data: incidents });
    } catch (e) {
        next(e);
    }
};

const getFirefightersForFireStation = async (req, res, next) => {
    const fire_station = req.fire_station;
    try {
        const firefighters = await fire_station.getFirefighters();
        return res.status(200).json({ data: firefighters });
    } catch (e) {
        next(e);
    }
};

const assignIncidentToFirefighter = async (req, res, next) => {
    const { firefighterId, incidentId } = req.body;
    const fire_station = req.fire_station;
    try {
        const firefighters = await fire_station.getFirefighters({
            where: { id: firefighterId },
        });
        if (firefighters.length === 0) {
            return res.status(404).json({ message: "Firefighter not found" });
        }
        const firefighter = firefighters[0];
        const incidents = await fire_station.getIncidents({
            where: { id: incidentId }
        });
        const incident = incidents[0];
        if (!incident) {
            return res.status(404).json({ message: "Incident not found" });
        }
        await incident.setFirefighter(firefighter);
        // await firefighter.setIncident(firefighter);
        return res
            .status(200)
            .json({ message: "Incident assigned to firefighter" });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getFireStation,
    registerFireStation,
    updateFireStation,
    getIncidentsForFireStation,
    getFirefightersForFireStation,
    assignIncidentToFirefighter,
};
