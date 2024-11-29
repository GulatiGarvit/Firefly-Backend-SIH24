const errorMiddleware = (err, req, res, next) => {
	console.log(err.message);
	res.status(err.statusCode || 500).json({
		reason: err.message,
		stack: process.env.NODE_ENV === "development" ? err.stack : "🥞",
	});
};

module.exports = errorMiddleware;
