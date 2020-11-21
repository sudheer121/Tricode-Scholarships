'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Student.belongsTo(models.User, {
          // foreignKey: 'id'
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
    college_name: Sequelize.STRING, 
    course : Sequelize.STRING,
    latest_marks : Sequelize.STRING, 
    yearly_family_income :Sequelize.STRING,

  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
