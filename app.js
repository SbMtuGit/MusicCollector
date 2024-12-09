const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const controllerLocation = require('./app_api/controllers/locations'); // Corrected naming for clarity
const apiRoutes = require('./app_api/routes/index'); // Import your API routes
require('./app_api/model/db');
require('./app_api/model/Albums');

const app = express();

// Set up CORS headers to allow requests from Angular frontend
app.use('/api', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Allow requests from Angular app on port 4200
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next(); // Pass control to the next middleware
});

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');
app.use(logger('dev')); // Log HTTP requests
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies
app.use(require('express-session')({
    secret: 'keyboard cat', // Secret for session
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); // Initialize Passport.js
app.use(flash()); // Flash messages for user feedback
app.use(passport.session()); // Set up Passport.js session handling
app.use(express.static(path.join(__dirname, 'public'))); 

// Passport config
var Account = require('./app_api/model/Account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'app_public')));

app.use('/api', apiRoutes);

// Main routes for other pages
app.get('/', controllerLocation.homelist);
app.get('/location/Login', controllerLocation.Login);
app.get('/location/Discover', controllerLocation.Discover);
app.get('/location/Register', controllerLocation.RegisterUser);

// 404 handler - If no route matches
app.use((req, res, next) => {
    console.log(`404 Error: Requested URL not found - ${req.url}`);
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler - This will catch all other errors in the application
app.use((err, req, res, next) => {
    // Log the error message
    console.error(`Error occurred: ${err.message}`);
    
    // Set locals for error handling (useful for dev mode)
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};


    res.status(err.status || 500);
    res.render('error'); // Renders the 'error.pug' view
});


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error.pug', {
        message: err.message,
        error: {} 
    });
});

// Start the server on the desired port (3000 in this case)
const cors = require('cors');
app.use(cors()); // This middleware will help manage CORS issues (useful in both dev and prod)

module.exports = app;
