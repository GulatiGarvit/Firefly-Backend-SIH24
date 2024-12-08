const firebaseAdmin = require("../config/firebase");
const { FireStation } = require("../models/index");
const { HttpError } = require("../config/http");

const fireStationExists = async (req, res, next) => {
	const token = req.headers.authorization;
	try {
		if (!token) throw "No token provided!";

		const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
		const fire_station = await FireStation.findByPk(decodedToken.uid);
		if (!fire_station)
			return next(new HttpError(404, "Fire Station not found!"));
		req.fire_station = fire_station;
		return next();
	} catch (e) {
		next(e);
	}
};

module.exports = fireStationExists;
