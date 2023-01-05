const express = require('express');
const router = express.Router();
const userService = require('../services/user-service');
const { userSchema, userUpdateSchema } = require('../../schemas/user-validation-schema');
const { middlewareFactory } = require('../../helpers/middleware');

router.get('/search/:id', (req, res) => {
    const { params } = req;
    userService.getUser(params.id).then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error:'User not Found' });
        }
    });
});
router.get('/all', (req, res) => {
    userService.getAllUsers().then(allUsers => {
        res.status(200).json(allUsers);
    });
});
router.get('/suggestions', (req, res) => {
    const { query } = req;
    const { loginSubstring, limit } = query;
    userService.getAutoSuggestions(loginSubstring, limit).then(suggestedUsers => {
        res.status(200).json(suggestedUsers);
    });
});
router.post('/addUser', middlewareFactory(userSchema, 'body'), (req, res) => {
    const { body } = req;
    userService.postUser(body).then(allUsersInDB => {
        res.status(200).json(allUsersInDB);
    });
});

router.patch('/update/:id', middlewareFactory(userUpdateSchema, 'body'), (req, res) => {
    const { body, params } = req;
    userService.updateUser(params.id, body).then(updatedUser => {
        res.status(200).json(updatedUser);
    });
});

router.delete('/delete/:id', (req, res) => {
    const { params } = req;
    userService.deleteUser(params.id).then(deletedUser => {
        res.status(200).json(deletedUser);
    });
});
module.exports = router;
