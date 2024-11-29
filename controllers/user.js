const { User } = require("../models/index");

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
	try {
		const user = await User.create({
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
