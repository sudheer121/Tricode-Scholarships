const { Model } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getRoles() {
      if(this.organisation_id===null){
        return 'student';
      }
      else{
        return 'admin';
      }
    }

    static associate(models) {
      User.hasOne(models.Student, {
        foreignKey: 'user_id'
      });
      User.belongsTo(models.Organisation, {
        foreignKey: 'id'
      });
      User.belongsToMany(models.scholarship, { through: models.scholarship_has_users });
    }

  };
  User.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    isProfileCompleted: Sequelize.BOOLEAN,
    organisation_id: Sequelize.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: { exclude: ['password'] },
    }
  });
  return User;
};
