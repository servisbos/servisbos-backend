'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment_type = sequelize.define('payment_type', {
    payment_types: DataTypes.STRING
  }, {});
  payment_type.associate = function(models) {
    // associations can be defined here
  };
  return payment_type;
};