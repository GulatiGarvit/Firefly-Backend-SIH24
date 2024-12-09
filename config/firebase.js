var admin = require("firebase-admin");

var serviceAccount = require("/secrets/firebase.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://firefly-sih-default-rtdb.firebaseio.com/",
});

module.exports = admin;
