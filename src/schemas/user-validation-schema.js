const Joi = require('joi');

const userSchema = Joi.object().keys({
    login:Joi.string().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9_.-]*$')).required(),
    age:Joi.number().min(4).max(130).required(),
    isDeleted:Joi.boolean().required()
});
const userUpdateSchema = Joi.object().keys({
    login:Joi.string(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9_.-]*$')),
    age:Joi.number().min(4).max(130),
    isDeleted:Joi.boolean()
});
module.exports = { userSchema, userUpdateSchema };
