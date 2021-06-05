const Joi = require('joi');

module.exports = Joi.object({
    phone: Joi.number()
        .min(998000000000)
        .max(998999999999)
        .required(),
    password: Joi.string()
        .required()
        .min(6)
        .max(32)
})