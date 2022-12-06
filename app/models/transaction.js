/*
 * Author: Mohammed Musthafa
 * Created Date: Wednesday December 7th 2022
 * Product : HighLevel Wallet API
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  wallet_id: {
    type: Schema.Types.ObjectId,
  },
  transaction_type: {
    type: String,
    enum: ['Credit', 'Debit'],
  },
  date: {
    type: Date,
  },
  amount: {
    type: Number,
  },
  description: {
    type: String,
  },
  balance: {
    type: Number,
  },
});

mongoose.model('Transaction', TransactionSchema);
