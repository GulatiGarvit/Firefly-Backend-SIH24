const { User } = require("../models/index");
const firebaseAdmin = require("../config/firebase");

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

const registerUser = async (req, res) => {
	// If this controller is called, the user does not exit
	// Use this function to register the user
	const { name, age, medicalConditions, fcmToken } = req.body;
	if (!name || !age) {
		return res.status(400).json({ message: "Name and age are required" });
	}
	var uid;
	try {
		const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
		uid = decodedToken.uid;
	} catch (e) {
		return res.status(403).json({ message: "Invalid token" });
	}
	try {
		const user = await User.create({
			id: uid,
			name,
			age,
			medicalConditions,
			fcmToken,
		});
		return res.status(200).json({ user: user });
	} catch (e) {
		next(e);
	}
};

module.exports = { getUser, registerUser };
