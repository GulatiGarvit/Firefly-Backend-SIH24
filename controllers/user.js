const loginUser = async (req, res) => {
	// If this controller is called, the user already passed jwt authentication middleware
	// Use this function to check if the user is in the database
	try {
		const user = req.user;
		return res.status(200).json({ user: user });
	} catch (e) {
		next(e);
	}
};

module.exports = { loginUser };
