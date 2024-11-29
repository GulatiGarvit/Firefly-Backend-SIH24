const express = require("express");
const app = express();

// Middlewares
const Middlewares = require("./middlewares/index.js");

// Setup env variables
const dotenv = require("dotenv");
dotenv.config();

const { User, sequelize } = require("./models");

// Database connection
sequelize
	.sync({ force: true })
	.then(() => {
		console.log("Connection has been established successfully.");

		// Start the server
		app.listen(process.env.PORT || 3000, () => {
			console.log(
				`Server is running on port ${process.env.PORT || 3000}`
			);
		});
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});

// Only for testing. TODO: Secure this route
app.get("/sync", async (req, res) => {
	const sequelize = require("./config/database.js");
	await sequelize.sync({ force: true });
	res.send("Successfully Synced");
});

// Base router
app.use("/api", Middlewares.userExists, require("./routes"));
app.use(Middlewares.errorMiddleware);
