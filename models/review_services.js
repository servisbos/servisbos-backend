"use strict";
module.exports = (sequelize, DataTypes) => {
  const review_services = sequelize.define(
    "review_services",
    {
      id_order: DataTypes.STRING,
      rating: DataTypes.DOUBLE,
      review: DataTypes.STRING
    },
    {}
  );
  review_services.associate = function(models) {
    models.review_services.belongsTo(models.order, {
      onDelete: "CASCADE",
      foreignKey: "id_order",
      targetKey: "id"
    });
  };
  return review_services;
};
