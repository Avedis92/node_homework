const uuid = require('uuid');
const User = require('../db/models/user-model');
const { Op } = require('sequelize');

class UserRepo {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async addUser(userObject) {
        const id = uuid.v1();
        const user = { id, ...userObject };
        await this.userModel.create(user);
        const allInsertedUsersInDb = await this.userModel.findAll();
        return allInsertedUsersInDb;
    }
    async getAllUsersFromDB() {
        const allUsersInDB = await this.userModel.findAll();
        return allUsersInDB;
    }
    async getUserById(userId) {
        const searchedUser = await this.userModel.findAll({
            where:{
                id:userId
            }
        });
        return searchedUser;
    }
    async getSuggestions(loginSubstring, limit) {
        const suggestedUsers = await this.userModel.findAll({
            limit,
            where:{
                login:{
                    [Op.substring]:loginSubstring
                }
            }
        });
        return suggestedUsers;
    }
    async updateUserInDB(userId, change) {
        await this.userModel.update(change, {
            where:{
                id:userId
            }
        });
        const updatedUser = await this.userModel.findAll({
            where:{
                id:userId
            }
        });
        return updatedUser;
    }
    async deleteUserInDB(userId) {
        await this.userModel.update({ isDeleted:true }, {
            where:{
                id:userId
            }
        });
        const deletedUser = await this.userModel.findAll({
            where:{
                id:userId
            }
        });
        return deletedUser;
    }
}
const userRepo = new UserRepo(User);
module.exports = userRepo;
