'use strict';
module.exports = (sequelize, DataTypes) => {
  const review_services = sequelize.define('review_services', {
    id_order: DataTypes.STRING,
    rating: DataTypes.DOUBLE,
    review: DataTypes.STRING
  }, {});
  review_services.associate = function(models) {
    // associations can be defined here
  };
  return review_services;
};