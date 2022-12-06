/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */

const morgan = require('morgan');
const helmet = require('helmet');
const winston = require('winston');
const walletRouter = require('./routers/wallet');

const env = process.env.NODE_ENV || 'development';

module.exports = function(app) {
  app.use(helmet());
  
  // Routers
  app.use('/wallet', walletRouter);
  let log;
  if (env !== 'development') {
    log = {
      stream: {
        write: msg => winston.info(msg)
      }
    };
  } else {
    log = 'dev';
  }
  if (env !== 'test') app.use(morgan(log));

};
