import Joi, { ObjectSchema } from "joi";

const citySchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().optional().allow(null, "").required()
});

export { citySchema };
