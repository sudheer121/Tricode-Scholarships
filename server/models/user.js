// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     isProfileCompleted: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
//};
const DataTypes = require('sequelize');
const db = require('./index');
const User = db.define("user", {
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  isProfileCompleted: {
    type: DataTypes.BOOLEAN
  }
});

