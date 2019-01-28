'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    id_user: DataTypes.STRING,
    services_type: DataTypes.STRING,
    id_provider: DataTypes.STRING,
    id_payment_type: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};