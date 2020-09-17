const functions = require('firebase-functions');
//Cors
const cors = require('cors');
//Express
const express = require('express');
const app = express();
app.use(cors({ origin: true }));

//Users
const { signup } = require('./handlers/users');

//POST
app.post('/signup', signup);

exports.api = functions.region("southamerica-east1").https.onRequest(app);
