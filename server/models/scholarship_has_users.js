'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scholarship_has_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  scholarship_has_users.init({
    status: DataTypes.STRING,
    acount_number: DataTypes.STRING,
    scholarship_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "scholarship", // 'Movies' would also work
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User", // 'Actors' would also work
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'scholarship_has_users',
  });
  return scholarship_has_users;
};