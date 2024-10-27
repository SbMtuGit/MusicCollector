const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/Login', ctrlLocations.Login);
router.get('/location/Register', ctrlLocations.Register);
router.get('/location/Discover', ctrlLocations.Discover);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
