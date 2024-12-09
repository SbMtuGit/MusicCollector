// routes/index.js
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');


// Locations pages
router.get('/location/homelist', ctrlLocations.homelist);  // Home page
router.get('/location/Login', ctrlLocations.Login);  // Login page
router.get('/location/Register', ctrlLocations.Register);  // Register page
router.get('/Discover', ctrlLocations.Discover);  // Discover page

// Other pages
router.get('/about', ctrlOthers.about);  // About page

module.exports = router;