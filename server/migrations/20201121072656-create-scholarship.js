'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('scholarships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      organisation_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'Organisations',
          key: 'id', 
        },
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('scholarships');
  }
};
/*
    father_name: 
    mother_name: 
    last_name: 
    mobile_num: 
    college_name: 
    course : 
    latest_marks : 
    yearly_family_income :
*/