import Joi, { ObjectSchema } from "joi";

const showSchema: ObjectSchema = Joi.object().keys({
  hall: Joi.number().required().messages({
    "any.required": "Hall is a required field",
    "string.empty": "Hall property is not allowed to be empty"
  }),
  movie: Joi.object({
    _id: Joi.string().required().messages({
      "string.base": "_id must be of type string",
      "string.empty": "_id is a required field"
    }),
    name: Joi.string().required().messages({
      "string.base": "Name must be of type string",
      "string.empty": "Name is a required field"
    }),
    img: Joi.string().required().messages({
      "any.required": "Image is a required field",
      "string.empty": "Image property is not allowed to be empty"
    }),
    category: Joi.array().items(Joi.string()).required().messages({
      "any.required": "Category is a required field",
      "string.empty": "Category property is not allowed to be empty"
    }),
    description: Joi.string().required().messages({
      "any.required": "Description is a required field",
      "string.empty": "Description property is not allowed to be empty"
    })
  }),
  time: Joi.string().required().messages({
    "any.required": "Time is a required field",
    "string.empty": "Time property is not allowed to be empty"
  }),
  city: Joi.string().required().messages({
    "any.required": "City is a required field",
    "string.empty": "City property is not allowed to be empty"
  })
});

export { showSchema };
