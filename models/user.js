"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: { type: DataTypes.STRING, allowNull: false },
      first_name: { type: DataTypes.STRING, allowNull: true },
      lastname: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
