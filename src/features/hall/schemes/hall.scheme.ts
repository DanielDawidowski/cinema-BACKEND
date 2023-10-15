import Joi, { ObjectSchema } from "joi";

const hallSchema: ObjectSchema = Joi.object().keys({
  hallNumber: Joi.number().optional().allow(null, "").required(),
  seats: Joi.array().items({
    row: Joi.string().optional().allow(null, "").required(),
    seat: Joi.number().optional().allow(null, "").required(),
    price: Joi.number().optional().allow(null, "").required(),
    status: Joi.string().optional().allow(null, "").required(),
    type: Joi.string().optional().allow(null, "").required(),
    color: Joi.string().optional().allow(null, "").required()
  })
});

export { hallSchema };
