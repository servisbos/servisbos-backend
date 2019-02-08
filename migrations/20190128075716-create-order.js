"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      services_type: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("PENDING", "ACCEPTED", "FINISHED","REVIEWED")
      },
      payment_type: {
        type: Sequelize.ENUM("CASH", "DEBIT")
      },
      order_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_user: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      id_provider: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      id_services_type: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "services_types",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
  }
};
