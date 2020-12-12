'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_has_scholarship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        student_has_scholarship.belongsTo(models.User, {
        foreignKey: 'id',sourceKey: 'user_id'
      });

      student_has_scholarship.belongsTo(models.scholarship, {
        foreignKey: 'id',sourceKey: 'scholarship_id'
      });
    }
  };
  student_has_scholarship.init({
    status: { 
    type:DataTypes.STRING,
    defaultValue: 'pending'
    },
    account_number: DataTypes.STRING,
    message: DataTypes.STRING,
    scholarship_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student_has_scholarship',
    tableName: 'student_has_scholarships'
  });
  return student_has_scholarship;
};