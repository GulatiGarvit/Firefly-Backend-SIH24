const { Firefighter } = require("../models/index");

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
	try {
		const firefighter = await Firefighter.create({
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

module.exports = { getFirefighter, registerFirefighter };
