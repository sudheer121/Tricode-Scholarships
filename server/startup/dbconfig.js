import Sequelize from 'sequelize';

module.exports = function () {
    const sequelize = new Sequelize('mysql://root:password@localhost:5001/tricode');
    async function testConnection() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
};
