"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: { type: DataTypes.STRING, allowNull: false },
      first_name: { type: DataTypes.STRING, allowNull: true },
      lastname: DataTypes.STRING,
      gender: DataTypes.ENUM("1", "2", "3"),
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      user_type: DataTypes.ENUM("1", "2", "3"),
      image: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    models.user.hasMany(models.users_service_type, {
      foreignKey: "id_users",
      sourceKey: "id"
    });
  };
  return user;
};
