const { getMessaging } = require("firebase-admin/messaging");
const firebaseAdmin = require("../config/firebase");

const sendNotification = async (message) => {
	// TODO: Implement
	getMessaging
		.send(message)
		.then((response) => {
			console.log("Successfully sent message:", response);
		})
		.catch((error) => {
			console.log("Error sending message:", error);
		});
};

module.exports = {
	sendNotification,
};
