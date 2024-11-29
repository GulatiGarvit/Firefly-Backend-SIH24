const firebaseAdmin = require("../config/firebase");
const { Firefighter } = require("../models/index");

const firefighterExists = async (req, res, next) => {
    const token = req.headers.authorization.substring(7);
    try {
        if (!token) throw "No token provided!";

        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
        const firefighter = await Firefighter.findByPk(decodedToken.uid);
        if (!firefighter) next(new HttpError(404, "Firefighter not found!")); 
        req.firefighter = firefighter;
        return next();
    } catch (e) {
        next(e);
    }
}

module.exports = firefighterExists;