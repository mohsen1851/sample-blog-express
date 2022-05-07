const joi = require("joi");

function storeUserValidation(data) {
    return joi.object({
        name: joi.string().required().messages({
            'any.required': 'فیلد نام خالی است'
        }),
        mobile: joi.string().required().length(11).messages({
            'any.required': 'فیلد موبایل خالی است'
        }),
        password: joi.string().required().messages({
            'any.required': 'فیلد کلمه عبور خالی است'
        }),
        password_confirm: joi.string().equal(joi.ref('password')).required(),
    }).validate(data)
}

function loginUserValidation(data) {
    return joi.object({
        mobile: joi.string().required().messages({
            'any.required': 'فیلد موبایل خالی است'
        }),
        password: joi.string().required().messages({
            'any.required': 'فیلد کلمه عبور خالی است'
        })
    }).validate(data)
}

module.exports = {storeUserValidation,loginUserValidation}