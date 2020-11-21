'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Student extends Model {
    static associate(models) {
        Student.belongsTo(models.User, {
          foreignKey: 'id'
        });
    }
  };
  Student.init({
    user_id: Sequelize.INTEGER, 
    name: Sequelize.STRING, 
    father_name: Sequelize.STRING,
    mother_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    mobile_num: Sequelize.STRING, 
    phone_number: Sequelize.STRING,
    college_name: Sequelize.STRING, 
    address:Sequelize.STRING,
    city: Sequelize.STRING,
    country: Sequelize.STRING,
    postal_code:Sequelize.STRING,
    current_course : Sequelize.STRING,
    current_college: Sequelize.STRING,
    latest_marks : Sequelize.STRING, 
    yearly_family_income :Sequelize.STRING,
    aadhar_number:Sequelize.STRING,
    applied_course: Sequelize.STRING,
    applied_course_fee: Sequelize.STRING,
    about_me: Sequelize.STRING,
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
