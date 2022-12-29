function findAllUsers(userArray, name) {
    const usersThatHaveSameName = [];
    for (const user of userArray) {
        if (user.login === name) {
            usersThatHaveSameName.push(user);
        }
    }
    return usersThatHaveSameName;
}

function sortUsersArray(userArray) {
    const loginArray = Array.from(new Set(userArray.map((user) => user.login).sort()));
    const sortedUserArray = [];
    for (const name of loginArray) {
        sortedUserArray.push(...findAllUsers(userArray, name));
    }
    return sortedUserArray;
}
module.exports = sortUsersArray;
