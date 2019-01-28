'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_service_type = sequelize.define('users_service_type', {
    id_users: DataTypes.INTEGER,
    id_services_type: DataTypes.INTEGER
  }, {});
  users_service_type.associate = function(models) {
    // associations can be defined here
  };
  return users_service_type;
};