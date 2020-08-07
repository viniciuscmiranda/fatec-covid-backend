const { Model, DataTypes } = require('sequelize');

class Beneficiary extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      birthday: DataTypes.DATE,
    }, {
      sequelize
    });
  }

  static associate(models){
    this.hasMany(models.Address, { foreignKey: 'beneficiary_id', as: 'addresses' });
    this.hasMany(models.Receipt, { foreignKey: 'beneficiary_id', as: 'receipts' });
  }
}

module.exports = Beneficiary;