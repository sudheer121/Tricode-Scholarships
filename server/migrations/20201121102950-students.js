'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {

    return Promise.all([
      queryInterface.addColumn('Student', 'name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'father_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'mother_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'last_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'mobile_num', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'college_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'course', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'latest_marks', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Student', 'yearly_family_income', {
        type: Sequelize.STRING
      })

    ]);
    
  },
  down: function (queryInterface, Sequelize) {
    return [
  ]}
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