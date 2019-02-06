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
    models.services_type.hasMany(models.users_service_type, {
      foreignKey: "id_services_type",
      sourceKey: "id"
    });
  };
  return services_type;
};
