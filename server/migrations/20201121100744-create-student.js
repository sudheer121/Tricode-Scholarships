'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      name: {
        type: Sequelize.STRING
      },
      father_name: {
        type: Sequelize.STRING
      },
      mother_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      mobile_num: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      college_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      college_name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      current_course: {
        type: Sequelize.STRING
      },
      latest_marks: {
        type: Sequelize.STRING
      },
      yearly_family_income: {
        type: Sequelize.STRING
      },
      aadhar_number: {
        type: Sequelize.STRING
      },
      applied_course: {
        type: Sequelize.STRING
      },
      applied_course_fee: {
        type: Sequelize.STRING
      },
      about_me: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Students');
  }
};