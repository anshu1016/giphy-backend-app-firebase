const admin = require("firebase-admin");
const serviceAccount = require("./giphyapp-8faac-firebase-adminsdk-xid6x-1fb21b89cf.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://giphyapp-8faac-default-rtdb.firebaseio.com",
  });
}

const db = admin.firestore();

module.exports = { db, admin };
