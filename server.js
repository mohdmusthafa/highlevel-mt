'use strict';
/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */

require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

const app = express();
const connection = connect();

module.exports = {
  app,
  connection,
};

// Bootstrap models
fs.readdirSync(models)
  .filter((file) => ~file.indexOf('.js'))
  .forEach((file) => require(join(models, file)));

// Bootstrap app
require('./app')(app);

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  const options = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(MONGO_URI, options);
  return mongoose.connection;
}
