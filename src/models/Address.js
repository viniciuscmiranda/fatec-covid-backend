const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      complement: DataTypes.STRING,
    }, {
      sequelize
    });
  }

  static associate(models){
    this.belongsTo(models.Beneficiary, { foreignKey: 'beneficiary_id', as: 'beneficiary' });
  }
}

module.exports = Address;