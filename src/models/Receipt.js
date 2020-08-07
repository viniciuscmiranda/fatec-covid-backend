const { Model, DataTypes } = require('sequelize');

class Receipt extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
      value: DataTypes.FLOAT,
    }, {
      sequelize
    });
  }

  static associate(models){
    this.belongsTo(models.Beneficiary, { foreignKey: 'beneficiary_id', as: 'beneficiary' });
  }
}

module.exports = Receipt;