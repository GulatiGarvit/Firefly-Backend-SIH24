const firebaseAdmin = require("../config/firebase");

const sendNotification = async (token, message) => {
	if(!token) return;
	// TODO: Implement
	try {
		const payload = {
			notification: {
				title: message.title,
				body: message.body,
			},
			data: message.data || {},
		};

		const response = await firebaseAdmin
			.messaging()
			.sendToDevice(token, payload);

		if (response.failureCount > 0) {
			response.results.forEach((result, index) => {
				const error = result.error;
				if (error) {
					console.error(
						"Failure sending notification to",
						token,
						error
					);
				}
			});
		} else {
			console.log("Notification sent successfully to", token);
		}
		return response;
	} catch (error) {
		console.error("Error sending notification", error);
		return error;
	}
};

module.exports = {
	sendNotification,
};
