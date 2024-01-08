import Joi, { ObjectSchema } from "joi";

const movieSchema: ObjectSchema = Joi.object().keys({
  img: Joi.string().messages({
    "any.required": "Image is a required field",
    "string.empty": "Image property is not allowed to be empty"
  }),
  name: Joi.string().required().messages({
    "any.required": "Name is a required field",
    "string.empty": "Name property is not allowed to be empty"
  }),
  category: Joi.array().items(Joi.string()).required().messages({
    "any.required": "Category is a required field",
    "string.empty": "Category property is not allowed to be empty"
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is a required field",
    "string.empty": "Description property is not allowed to be empty"
  })
});

export { movieSchema };
