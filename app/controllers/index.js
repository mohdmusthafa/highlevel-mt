/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */
const mongoose = require('mongoose');

const Wallet = mongoose.model('Wallet');
const Transaction = mongoose.model('Transaction');

const getTransactionType = (amount) => {
  if (amount > 0) return 'Credit';
  return 'Debit';
}

module.exports.setUpWallet = async (req, res) => {
  try {
    const { name, balance } = req.body;
    const wallet = new Wallet({
      name,
      balance
    })
    await wallet.save();

    const transaction = new Transaction({
      wallet_id: wallet.id,
      transaction_type: getTransactionType(balance),
      date: Date.now(),
      amount: balance,
      balance: balance,
      description: 'Setup'
    })
    await transaction.save();
    
    res.status(201).json({
      id: wallet.id,
      balance: wallet.balance,
      name: wallet.name,
      transaction_id: transaction.id,
      date: transaction.date,
    });
  } catch (error) {
    console.log(error)
    throw error;
  }
}

module.exports.transact = async (req, res) => {
  try {
    const { walletId } = req.params;
    const { amount, description } = req.body;
    const wallet = await Wallet.findById(walletId).exec();
    const transaction_type = getTransactionType(amount);

    const transaction = new Transaction({
      wallet_id: wallet.id,
      transaction_type,
      date: Date.now(),
      amount,
      description,
    })
    if (transaction_type === 'Debit') {
      const absolute_amount = Math.abs(amount);
      if (absolute_amount > wallet.balance) {
        return res.json({ message: 'Insufficient funds'})
      }
      wallet.balance = wallet.balance - absolute_amount;
    } else {
      wallet.balance = wallet.balance + amount;
    }
    
    transaction.balance = wallet.balance
    await wallet.save();
    await transaction.save();
    return res.json({
      balance: wallet.balance,
      transaction_id: transaction.id,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports.fetchTransactions = async (req, res) => {
  try {
    const { walletId, skip, limit } = req.query;
    const transactions = await Transaction
      .find({ wallet_id: walletId }, null, { skip, limit })
      .exec();
    res.send(transactions);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports.getWalletDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const wallet = await Wallet.findById(id).exec();
    res.send(wallet)
  } catch (error) {
    console.log(error);
    throw error;
  }
}