const { getMessaging } = require("firebase-admin/messaging");
const firebaseAdmin = require("../config/firebase");

const sendNotification = async (token, data) => {
	const message = {
		data: data,
		token: token,
	};
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
