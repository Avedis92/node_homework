const { Sequelize, DataTypes } = require('sequelize');

const dbOptions = {
    host:'localhost',
    dialect:'postgres',
    port:'5432'
};
const dbInfo = ['userDB', 'postgres', 'YourM@m@92', dbOptions];

const sequelize = new Sequelize(...dbInfo);
module.exports = { sequelize, DataTypes };
