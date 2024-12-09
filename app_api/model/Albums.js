const mongoose = require('mongoose');
const Album = require('../model/Albums');

const AlbumsSchema = new mongoose.Schema({
  AlbumsID:{type: Number, required: true},
  cover: { type: String, required: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
});


module.exports =  mongoose.model('Album', AlbumsSchema,'MusicCollection');
