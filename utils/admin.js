const admin =  require('firebase-admin');

var serviceAccount = require("./social-network-5d30f-firebase-adminsdk-kj33x-002db46f77.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://social-network-5d30f.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db }