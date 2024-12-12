const { User } = require("../models/index");
const firebaseAdmin = require("../config/firebase");
const { updateFireStation } = require("./fire_station");
const IncidentService = require("../services/incident");

const getUser = async (req, res) => {
    // If this controller is called, the user already passed jwt authentication middleware
    // Use this function to check if the user is in the database
    try {
        const user = req.user;
        return res.status(200).json({ user: user });
    } catch (e) {
        next(e);
    }
};

const registerUser = async (req, res, next) => {
    // If this controller is called, the user does not exit
    // Use this function to register the user
    const { name, age, gender, medicalConditions, fcmToken } = req.body;
    if (!name || !age || !gender) {
        return res.status(400).json({ message: "Name and age are required" });
    }
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
        const user = await User.create({
            id: uid,
            name,
            age,
            gender,
            medicalConditions,
            fcmToken,
        });
        return res.status(200).json({ user: user });
    } catch (e) {
        next(e);
    }
};

const updateUser = async (req, res, next) => {
    const user = req.user;
    try {
        const updatedUser = await user.update(req.body);
        return res.status(200).json({ user: updatedUser });
    } catch (e) {
        next(e);
    }
};

const confirmationForIncident = async (req, res, next) => {
    const user = req.user;
    const { incidentId } = req.body;
    try {
        const incident = await IncidentService.getIncidentById(incidentId);
        if (!incident) {
            return res.status(404).json({ message: "Incident not found" });
        }

        await incident.addUser(user);
        return res.status(200).json({ message: "User confirmed for incident" });
    } catch (e) {
        next(e);
    }
};

module.exports = { getUser, registerUser, updateUser, confirmationForIncident };
