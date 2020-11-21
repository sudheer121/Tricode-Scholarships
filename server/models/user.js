const { Model } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    isProfileCompleted: Sequelize.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
