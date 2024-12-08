const { FireStation } = require("../models/index");

const getFireStation = async (req, res, next) => {
	try {
		const fire_station = req.fire_station;
		return res.status(200).json({ firestation: fire_station });
	} catch (e) {
		next(e);
	}
};

module.exports = { getFireStation };
