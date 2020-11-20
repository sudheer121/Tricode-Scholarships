const { Sequelize } = require('sequelize');

module.exports = function () {
    console.log(process.env.DB_PASSWORD); 
    console.log(`mysql://root:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/tricode`);
    const sequelize = new Sequelize(`mysql://root:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/tricode`);
    return sequelize;
};
