const firebaseAdmin = require("../config/firebase");
const { User } = require("../models/index");

const userExists = async (req, res, next) => {
	const token = req.headers.authorization.substring(7);
	try {
		if (!token) throw "No token provided!";

		const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
		const user = await User.findByPk(decodedToken.id);
		if (!user) throw "User does not exist";

		req.user = user;
		return next();
	} catch (e) {
		next(e);
	}
};

module.exports = userExists;
