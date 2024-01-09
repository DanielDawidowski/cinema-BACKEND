import Joi, { ObjectSchema } from "joi";

const ticketSchema: ObjectSchema = Joi.object().keys({
  movie: Joi.string().required().messages({
    "any.required": "Movie is a required field",
    "string.empty": "Movie property is not allowed to be empty"
  }),
  show: Joi.string().required().messages({
    "any.required": "Time is a required field",
    "string.empty": "Time property is not allowed to be empty"
  }),
  seat: Joi.string().required().messages({
    "any.required": "Seat is a required field",
    "string.empty": "Seat property is not allowed to be empty"
  })
});

export { ticketSchema };
