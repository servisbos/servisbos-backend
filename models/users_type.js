'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_type = sequelize.define('users_type', {
    users_type: DataTypes.STRING
  }, {});
  users_type.associate = function(models) {
    // associations can be defined here
  };
  return users_type;
};