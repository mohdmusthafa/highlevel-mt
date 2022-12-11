/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const winston = require('winston');
const appRouter = require('./routers');

const env = process.env.NODE_ENV || 'development';

module.exports = function (app) {
  app.use(cors())
  app.use(helmet());
  app.use(express.json());

  // Routers
  app.use('/', appRouter);
  let log;
  if (env !== 'development') {
    log = {
      stream: {
        write: (msg) => winston.info(msg),
      },
    };
  } else {
    log = 'dev';
  }
  if (env !== 'test') app.use(morgan(log));
};
