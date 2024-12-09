const { json, response } = require('express');
const request = require('request');

const apiOptions = {
 server: 'http://localhost:3000'
}; 

if (process.env.NODE_ENV === 'production') {
 apiOptions.server = 'https://musiccollector.onrender.com';
}

const homelist = function(req, res) {
 res.render('Info', {
    title: 'DiscSearch - your favourite music in one place',
    pageHeader: {
       title: 'DiscSearch',
       strapline: 'All you music in one place'
    },
    sidebar: "Stream line your music collection today"
 });
};

const Discover = function (req, res) {
  const path = '/api/Discover';
  const requestOptions = {
     url: apiOptions.server + path,
     method: 'GET',
     json:{}
  };

  request(requestOptions, (err, response, body) => {
     if (err || response.statusCode !== 200) {
        console.error("Error fetching data", err);
        return res.render('error', {
           message: 'Unable to fetch discover data',
           error: err,
        });
     }

     res.render('Discover', {
        title: 'DiscSearch',
        pageHeader: {
           title: 'DiscSearch',
        },
        sidebar: {
           context: 'Welcome to DiscSearch',
        },
            Discover:body
     });
  });
};

const Login = function(req, res) {
 res.render('Login', {
    title: 'Login',
    pageHeader: { title: 'DiscSearch' }
 });
};

const Register = function(req, res) {
 res.render('Register', {
    title: 'Register',
    pageHeader: { title: 'DiscSearch' }
 });
};

module.exports = {
 homelist,
 Login,
 Register,
 Discover
};