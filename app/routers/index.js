/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */
const { Router } = require('express');
const AppController = require('../controllers');

const router = new Router();

router.post('/setup', AppController.setUpWallet);
router.post('/transact/:walletId', AppController.transact);
router.get('/transactions', AppController.fetchTransactions);
router.get('/wallet/:id', AppController.getWalletDetails);

module.exports = router;
