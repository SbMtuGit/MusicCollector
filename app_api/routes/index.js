const express = require('express');
const router = express.Router();
const passport = require('passport');
const ctrlLocations = require('../controllers/locations');  // Ensure this path is correct
const Account = require('../models/Account');  // Assuming your Account model is in the 'models' folder

// Route to display homepage or the list of locations
router.get('/', ctrlLocations.homelist);

// Route to read a specific album by ID
router.get('/location/Discover/:AlbumsID', ctrlLocations.AlbumReadOne);

// Route to get all music (Discover page)
router.get('/Discover', ctrlLocations.getAllMusic);

// Register Route (POST request)
router.post('/auth/register', (req, res, next) => {
    const { username, password, email } = req.body;

    // Register a new account using the passport-local-mongoose method
    Account.register(new Account({ username, email }), password, (err, account) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating account', error: err });
        }
        
        // Authenticate the newly registered user
        passport.authenticate('local')(req, res, () => {
            res.status(200).json({ message: 'Registration successful' });
        });
    });
});

// Login Route (POST request)
router.post('/auth/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ message: 'Login successful', user: req.user });
});

// Logout Route (GET request)
router.get('/auth/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.save((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/');  // Redirect to homepage or desired route after logout
        });
    });
});

module.exports = router;
