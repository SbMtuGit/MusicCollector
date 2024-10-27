const mongoose = require('mongoose');
require('./app_server/models/db');

const mongoose = require('mongoose');

const dbURI =  "mongodb+srv://samirb1958:sam@musiccollectiondb.x97kq.mongodb.net/?retryWrites=true&w=majority&appName=MusicCollectionDB";

try {
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongoose is connected"))  

  .catch(err => console.error(err));
} catch (e) {
  console.error("Could not connect to MongoDB");
}
require('./Albums');