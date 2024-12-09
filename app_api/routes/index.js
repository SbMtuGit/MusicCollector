const express = require('express');
const router = express.Router();
const passport = require('passport');
const ctrlLocations = require('../controllers/locations');  
const Account = require('../models/Account');  


router.get('/', ctrlLocations.homelist);


router.get('/location/Discover/:AlbumsID', ctrlLocations.AlbumReadOne);


router.get('/Discover', ctrlLocations.getAllMusic);

// Register Route (POST request)
router.post('/auth/register', (req, res, next) => {
    const { username, password, email } = req.body;

 
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
            res.redirect('/'); 
        });
    });
});

module.exports = router;
