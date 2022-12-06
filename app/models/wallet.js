/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
  name: { type: String },
  balance: { type: Number },
  date: {
    type: Number,
    defaultValue: Date.now(),
  },
});

WalletSchema.method({});

mongoose.model('Wallet', WalletSchema);
