'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scholarship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      scholarship.belongsTo(models.Organisation, {
        foreignKey: 'id'
      });
      scholarship.belongsToMany(models.User, { through: models.scholarship_has_users });
    }
  };
  scholarship.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    organisation_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'scholarship',
  });
  return scholarship;
};