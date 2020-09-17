//Databas
const { db } = require('../utils/admin');
//Firebase
const firebase = require('firebase');
//Configuração Firebase
const firebaseConfig = require('../utils/config');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

exports.signup = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        imageUrl: req.body.imageUrl
    }

    db.doc(`/users/${newUser.email}`).set(newUser)
        .then(() => {
            return res.status(201).json({ message: 'Usúario foi criado' });
        })
        .catch(err => console.error(err));
}


