"use strict";
module.exports = (sequelize, DataTypes) => {
  const services_type = sequelize.define(
    "services_type",
    {
      service_type: DataTypes.STRING
    },
    {}
  );
  services_type.associate = function(models) {
    // associations can be defined here
  };
  return services_type;
};
