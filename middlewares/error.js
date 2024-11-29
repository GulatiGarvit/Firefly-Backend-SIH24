const { HttpError } = require("../config/http.js");

const errorMiddleware = (err, req, res, next) => {
	if (err instanceof HttpError) {
	} else {
		console.log(err.message);
	}
	res.status(err.statusCode || 500).json({
		reason: err.message,
		stack: err.stack,
	});
};

module.exports = errorMiddleware;
