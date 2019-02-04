"use strict";
module.exports = (sequelize, DataTypes) => {
  const order_detail = sequelize.define(
    "order_detail",
    {
      id_order: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      postal_code: DataTypes.DOUBLE,
      status: {
        type: DataTypes.ENUM("Pending", "Accepted", "Rejected"),
        defaultValue: "Pending"
      }
    },
    {}
  );
  order_detail.associate = function(models) {
    // associations can be defined here
  };
  return order_detail;
};
