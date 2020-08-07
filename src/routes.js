const express = require('express');
const BeneficiaryController = require('./controllers/BeneficiaryController');
const AddressController = require('./controllers/AddressController');
const ReceiptController = require('./controllers/ReceiptController');

const routes = express.Router();

// beneficiaries
routes.get('/beneficiaries', BeneficiaryController.index);
routes.post('/beneficiaries', BeneficiaryController.store);
routes.get('/beneficiaries/:beneficiary_id', BeneficiaryController.get);
routes.patch('/beneficiaries/:beneficiary_id', BeneficiaryController.update);
routes.delete('/beneficiaries/:beneficiary_id', BeneficiaryController.delete);

// addresses
routes.get('/beneficiaries/:beneficiary_id/addresses', AddressController.index);
routes.post('/beneficiaries/:beneficiary_id/addresses', AddressController.store);
routes.get('/addresses/:address_id', AddressController.get);
routes.patch('/addresses/:address_id', AddressController.update);
routes.delete('/addresses/:address_id', AddressController.delete);

// receipts
routes.get('/beneficiaries/:beneficiary_id/receipts', ReceiptController.index);
routes.post('/beneficiaries/:beneficiary_id/receipts', ReceiptController.store);
routes.get('/receipts/:receipt_id', ReceiptController.get);
routes.patch('/receipts/:receipt_id', ReceiptController.update);
routes.delete('/receipts/:receipt_id', ReceiptController.delete);

module.exports = routes;