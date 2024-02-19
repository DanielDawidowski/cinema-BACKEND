import Joi, { ObjectSchema } from "joi";

const showSchema: ObjectSchema = Joi.object().keys({
  hall: Joi.string().required().messages({
    "any.required": "Hall is a required field",
    "string.empty": "Hall property is not allowed to be empty"
  }),
  movie: Joi.string().required().messages({
    "any.required": "Movie is a required field",
    "string.empty": "Movie property is not allowed to be empty"
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
