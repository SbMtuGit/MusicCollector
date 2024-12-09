
const mongoose = require('mongoose');
const Album = require('../model/Albums');
const AlbumSchema = mongoose.model('Album');
const passport = require('passport');
const Account = require('../model/Account');
const homelist = function(req, res){
    res.render('Info', {
      title: 'DiscSearch - your favourite music in one place',
      pageHeader: {
        title: 'DiscSearch',
        strapline: 'All you music in one place'
      },
      sidebar: "Stream line your music collection today",
     
    });
  };
  const Discover = function(req, res){
    res.render('Discover', {
      title: 'DiscSearch',
      pageHeader: {
        title: 'Discsearch'
      },
      sidebar: {
        context: 'welcome to discsearch'
      },
    
      albums: [
        {
          cover: '/locations/pic03.jpg',
          title: 'Abbey Road',
          artist: 'The Beatles',
          year: 1969,
          genre: 'Rock',
          discription:"the iconic eleventh studio album by The Beatles, released in 1969. Celebrated for its eclectic sound and innovative production, the album features classic tracks like Come Together, Something, and Here Comes the Sun"
        },
        
        {
          cover: '/images/album3.jpg',
          title: 'Back to Black',
          artist: 'Amy Winehouse',
          year: 2006,
          genre: 'Soul',
          discription:"Back to Black is the critically acclaimed second studio album by Amy Winehouse, released in 2006. This powerful record showcases her unique blend of soul, jazz, and R&B, featuring standout tracks like Rehab, You Know I'm No Good "
        }
      ]
    });
  };
  const Login= function(req, res){
    res.render('Login', {
      title: 'Login',
      pageHeader: { title: 'DiscSearch' }
    });
  };
  const RegisterUser= function(req, res){
    res.render('Register', {
      title: 'Register',
      pageHeader: { title: 'DiscSearch' }
    });
  };
const AlbumUpdateOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };
const AlbumDeleteOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };

const AlbumReadOne = async function(req, res) {
        AlbumSchema
        .findById(req.params.AlbumsID)
        .then((AlbumSchema,err) => {
            console.log(req.params.AlbumsID);
        res
        .status(200)
        .json(AlbumSchema);
        });
        };
        const getAllMusic = async (req, res) => {
          try {
            const music = await AlbumSchema.find();
            res.status(200).json(music);
          } catch(error) {
            console.error(error);
            res.status(500).json({ message: "Error retrieving music" });
          }
       }
 
        
module.exports ={
 getAllMusic,
  Discover,
  homelist,
  RegisterUser,
  Login,
  AlbumReadOne,
  AlbumUpdateOne,
  AlbumDeleteOne
};
