"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      id_user: DataTypes.STRING,
      services_type: DataTypes.STRING,
      id_provider: DataTypes.STRING,
      payment_type: DataTypes.ENUM("CASH", "DEBIT"),
      status: DataTypes.STRING
    },
    {}
  );
  order.associate = function(models) {
    models.order.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "id_user",
      targetKey: "id"
    });
    models.order.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "id_provider",
      targetKey: "id"
    });
  };
  return order;
};
