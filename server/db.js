const mongoose = require('mongoose');
const config = require('./config');
const populateDb = require('./utils/db.populate');

exports.connectToDb = function() {
  mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  let db = mongoose.connection;
  db.once('open', () => {
    console.log('Connected to the database');
    console.log('DB: ' + config.DB);
    populateDb();
  });
  db.on('error', err => console.log('Error: ', err));
};
