const express=require('express');
const router=express.Router();
const userCRUDMethods=require('../crud-operations/task1/db');
const {userSchema,userUpdateSchema} =require('../schemas/user-validation-schema');
const {middlewareFactory} =require('../helpers/middleware');

router.get('/search/:id',(req,res)=>{
    const {params}=req;
    const user=userCRUDMethods.userCRUD.getUser(params.id)
    if(user){
        res.status(200).json(user)
    }else {
        res.status(404).json({error:'User not Found'})
    }
})
router.get('/all',(req,res)=>{
    res.status(200).json(userCRUDMethods.userDb);
})
router.get('/suggestions',(req,res)=>{
    const {query}=req;
    const {loginSubstring,limit}=query
    const suggestions=userCRUDMethods.userCRUD.getAutoSuggestions(loginSubstring,limit);
    res.status(200).json(suggestions);
})
router.post('/addUser',middlewareFactory(userSchema,'body'),(req,res)=>{
    const {body}=req;
    userCRUDMethods.userCRUD.postUser(body);
    res.status(200).json(userCRUDMethods.userDb);
})

router.patch('/update/:id',middlewareFactory(userUpdateSchema,'body'),(req,res)=>{
    const {body,params}=req;
    const updatedUser=userCRUDMethods.userCRUD.updateUser(params.id,body);
    res.status(200).json(updatedUser);
})

router.delete('/delete/:id',(req,res)=>{
    const {params}=req;
    const deletedUser=userCRUDMethods.userCRUD.deleteUser(params.id);
    res.status(200).json(deletedUser)
})
module.exports=router