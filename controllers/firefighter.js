const { Firefighter } = require("../models/index");
const firebaseAdmin = require("../config/firebase");

const getFirefighter = async (req, res, next) => {
	try {
		const firefighter = req.firefighter;
		return res.status(200).json({ firefighter: firefighter });
	} catch (e) {
		next(e);
	}
};

const registerFirefighter = async (req, res, next) => {
	const { name, age, phoneNumber, email, fcmToken } = req.body;
	var uid;
	try {
		const firebaseAuthToken = req.headers.authorization.substring(7);
		const decodedToken = await firebaseAdmin
			.auth()
			.verifyIdToken(firebaseAuthToken);
		uid = decodedToken.uid;
	} catch (e) {
		return res.status(403).json({ message: "Invalid token" });
	}
	try {
		const firefighter = await Firefighter.create({
			id: uid,
			name,
			age,
			phoneNumber,
			email,
			fcmToken,
		});
		return res.status(200).json({ firefighter: firefighter });
	} catch (e) {
		next(e);
	}
};

const updateFirefighter = async (req, res, next) => {
	const { name, age, phoneNumber, email, fcmToken } = req.body;
	const firefighter = req.firefighter;
	try {
		const updatedFirefighter = await firefighter.update({
			name,
			age,
			phoneNumber,
			email,
			fcmToken,
		});
		return res.status(200).json({ firefighter: updatedFirefighter });
	} catch (e) {
		next(e);
	}
};

module.exports = { getFirefighter, registerFirefighter, updateFirefighter };
