const { FireStation } = require("../models/index");
const firebaseAdmin = require("../config/firebase");

const getFireStation = async (req, res, next) => {
	try {
		const fire_station = req.fire_station;
		return res.status(200).json({ firestation: fire_station });
	} catch (e) {
		next(e);
	}
};

const registerFireStation = async (req, res, next) => {
	const { name, phoneNumber, address, email, latlng, fcmToken } = req.body;
	var uid;
	try {
		const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
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
			latlng,
			fcmToken,
		});
		return res.status(200).json({ firestation: fire_station });
	} catch (e) {
		next(e);
	}
};

const updateFireStation = async (req, res, next) => {
	const { name, phoneNumber, address, email, latlng, fcmToken } = req.body;
	const fire_station = req.fire_station;
	try {
		const updatedFireStation = await fire_station.update({
			name,
			phoneNumber,
			address,
			email,
			latlng,
			fcmToken,
		});
		return res.status(200).json({ firestation: updatedFireStation });
	} catch (e) {
		next(e);
	}
}

module.exports = { getFireStation, registerFireStation, updateFireStation };
