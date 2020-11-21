'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {

    return Promise.all([
      queryInterface.addColumn('Students', 'name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'father_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'mother_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'last_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'mobile_num', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'college_name', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'course', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'latest_marks', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Students', 'yearly_family_income', {
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