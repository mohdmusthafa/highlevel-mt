/*
 * Author: Mohammed Musthafa
 * Created Date: Tuesday December 6th 2022
 * Product : HighLevel Wallet API
 */
const { Router } = require('express');
const WalletController = require('../controllers/wallet');

const router = new Router();

router.get('/test', WalletController.testController);

module.exports = router;
