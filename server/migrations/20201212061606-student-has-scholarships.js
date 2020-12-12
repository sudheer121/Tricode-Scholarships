'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student_has_scholarships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      message : {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
      },
      scholarship_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'scholarships',
          key: 'id',
        },
        allowNull: false,
        foreignKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await Promise.resolve('.');
  }
};