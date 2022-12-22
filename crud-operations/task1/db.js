const uuid=require('uuid')

const userDb=[];

class UserCRUDOperation {

    getUser(id){
        const user=userDb.find(user=>user.id===id);
        return user;
    }
    getAllUsers(){
        return userDb;
    }
    getAutoSuggestions(loginSubstring, limit){
        const suggestions=userDb.filter(user=>user.login.toLowerCase().includes(loginSubstring.toLowerCase()));
        suggestions.sort();
        return suggestions.slice(0,limit);
    }
    postUser(userObject){
        const id=uuid.v1();
        const user={...userObject,id}
        userDb.push(user);
    }
    updateUser(id,change){
        const updatedUserIndex=userDb.findIndex(user=>user.id===id);
        userDb[updatedUserIndex]={...userDb[updatedUserIndex],...change}
        return userDb[updatedUserIndex]
    }
    deleteUser(id) {
        const deletedUserIndex=userDb.findIndex(user=>user.id===id);
        userDb[deletedUserIndex].isDeleted=true;
        return userDb[deletedUserIndex] ;
    }
}
const userCRUD=new UserCRUDOperation();
module.exports={userCRUD,userDb};
