"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      id_user: DataTypes.STRING,
      services_type: DataTypes.STRING,
      id_provider: DataTypes.STRING,
      payment_type: DataTypes.ENUM("CASH", "DEBIT"),
      status: DataTypes.ENUM("PENDING","ACCEPTED","FINISHED","REVIEWED"),
      address: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      province: {
        type: DataTypes.STRING
      },
      postal_code: {
        type: DataTypes.DOUBLE
      },
      order_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
    },
    {}
  );
  order.associate = function(models) {
    models.order.belongsTo(models.user, {
      onDelete: "CASCADE",
      as: "user",
      foreignKey: "id_user",
      targetKey: "id"
    });
    models.order.belongsTo(models.user, {
      onDelete: "CASCADE",
      as:"provider",
      foreignKey: "id_provider",
      targetKey: "id"
    });

  };
  return order;
};
