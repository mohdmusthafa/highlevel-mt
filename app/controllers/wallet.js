/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */
const mongoose = require('mongoose');

const Wallet = mongoose.model('Wallet');

module.exports.testController = async (req, res) => {
  const item = new Wallet({ name: 'musthu1', balance: 100 });
  item.save();
  console.log(item)
  res.send("hello world")
}