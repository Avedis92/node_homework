const userRepo = require('../repositories/user-repository');

class UserService {
    constructor(repository) {
        this.userRepository = repository;
    }
    async getUser(userId) {
        const searchedUser = await this.userRepository.getUserById(userId);
        return searchedUser;
    }
    async getAllUsers() {
        const allUsers = await this.userRepository.getAllUsersFromDB();
        return allUsers;
    }
    async getAutoSuggestions(loginSubstring, limit) {
        const suggestedUsers = await this.userRepository.getSuggestions(loginSubstring, limit);
        return suggestedUsers;
    }
    async postUser(userObject) {
        const allInsertedUsersInDb = await this.userRepository.addUser(userObject);
        return allInsertedUsersInDb;
    }
    async updateUser(userId, change) {
        const updatedUser = await this.userRepository.updateUserInDB(userId, change);
        return updatedUser;
    }
    async deleteUser(userId) {
        const deletedUser = await this.userRepository.deleteUserInDB(userId);
        return deletedUser;
    }
}
const userService = new UserService(userRepo);
module.exports = userService;
