const { sequelize, DataTypes } = require('../init');

const userModelOptions = {
    id:{
        type:DataTypes.UUID,
        allowNUll:false,
        primaryKey:true
    },
    login:{
        type:DataTypes.STRING,
        allowNUll:false
    },
    password:{
        type:DataTypes.STRING,
        allowNUll:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNUll:false
    },
    isDeleted:{
        type:DataTypes.BOOLEAN,
        allowNUll:false
    }

};

const User = sequelize.define('user', userModelOptions);
User.sync({ force:true });
module.exports = User;
