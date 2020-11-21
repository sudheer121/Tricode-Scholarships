'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scholarships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      scholarships.belongsTo(models.Organisation, {
        foreignKey: 'organisation_id'
      });
    }
  };
  scholarships.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    organisation_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'scholarships',
  });
  return scholarships;
};