"use strict";
module.exports = (sequelize, DataTypes) => {
  const users_service_type = sequelize.define(
    "users_service_type",
    {
      id_users: DataTypes.INTEGER,
      id_services_type: DataTypes.INTEGER,
      price: DataTypes.DOUBLE
    },
    {}
  );
  users_service_type.associate = function(models) {
    models.users_service_type.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "id_users",
      targetKey: "id"
    });
    models.users_service_type.belongsTo(models.services_type, {
      onDelete: "CASCADE",
      foreignKey: "id_services_type",
      targetKey: "id"
    });
  };

  return users_service_type;
};
