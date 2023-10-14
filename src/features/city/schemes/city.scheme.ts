import Joi, { ObjectSchema } from "joi";

const citySchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().optional().allow(null, "").required(),
  halls: Joi.array().items(Joi.string().optional().allow(null, "")).optional().allow(null, "")
});

export { citySchema };
