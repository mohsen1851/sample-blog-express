const joi = require("joi");

function storePostValidation(data) {
    return joi.object({
        title: joi.string().required().messages({
            'any.required': 'فیلد عنوان خالی است'
        }),
        body: joi.string().required().messages({
            'any.required': 'فیلد توضیحات خالی است'
        }),
    }).validate(data,{allowUnknown:true})
}

module.exports = {storePostValidation}