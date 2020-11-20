const { Sequelize } = require('sequelize');

module.exports = function () {
    const sequelize = new Sequelize('mysql://root:password@localhost:5001/tricode');
    return sequelize;
};
