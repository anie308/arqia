import Joi from "joi"

export const singleMailObjectDTO  = Joi.object({
    subject:Joi.string().required(),
    content:Joi.string().required(),
    address:Joi.string().required()
}).options({allowUnknown:false})