const Sequelize = require('sequelize');
const dBconfig = require('../config/database');

const Beneficiary = require('../models/Beneficiary');
const Address = require('../models/Address');
const Receipt = require('../models/Receipt');

const connection = new Sequelize(dBconfig);

Beneficiary.init(connection);
Address.init(connection);
Receipt.init(connection);

Beneficiary.associate(connection.models);
Address.associate(connection.models);
Receipt.associate(connection.models);

module.exports = connection;