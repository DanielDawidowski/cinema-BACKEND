import Joi, { ObjectSchema } from "joi";

const ticketSchema: ObjectSchema = Joi.object().keys({
  show: Joi.object({
    _id: Joi.string().required().messages({
      "string.base": "_id must be of type string",
      "string.empty": "_id is a required field"
    }),
    city: Joi.string().required().messages({
      "string.base": "City must be of type string",
      "string.empty": "City is a required field"
    }),
    hall: Joi.string().required().messages({
      "string.base": "Hall must be valid",
      "string.required": "Hall must be valid"
    }),
    movie: Joi.string().required().messages({
      "string.base": "Movie must be valid",
      "string.required": "Movie must be valid"
    }),
    time: Joi.string().required().messages({
      "string.base": "Time must be valid",
      "string.required": "Time must be valid"
    })
  }),
  seats: Joi.array().items({
    row: Joi.string().optional().allow(null, "").required().messages({
      "any.required": "Row is a required field",
      "string.empty": "Row property is not allowed to be empty"
    }),
    seat: Joi.number().optional().allow(null, 0).required().messages({
      "any.required": "Seat is a required field",
      "string.empty": "Seat property is not allowed to be empty"
    }),
    status: Joi.string().optional().allow(null, "").required().messages({
      "any.required": "Status is a required field",
      "string.empty": "Status property is not allowed to be empty"
    }),
    type: Joi.string().optional().allow(null, "").required().messages({
      "any.required": "Type is a required field",
      "string.empty": "Type property is not allowed to be empty"
    }),
    price: Joi.number().optional().allow(null, "").required().messages({
      "any.required": "Price is a required field",
      "string.empty": "Price property is not allowed to be empty"
    })
  }),
  price: Joi.number().optional().allow(null, 0).required().messages({
    "any.required": "Price is a required field",
    "string.empty": "Price property is not allowed to be empty"
  }),
  name: Joi.object({
    name: Joi.string().required().min(4).max(30).messages({
      "string.base": "Name must be of type string",
      "string.empty": "Name is a required field"
    }),
    lastName: Joi.string().required().min(4).max(30).messages({
      "string.base": "LastName must be of type string",
      "string.empty": "LastName is a required field"
    }),
    email: Joi.string().email().required().messages({
      "string.base": "Email must be valid",
      "string.required": "Email must be valid",
      "string.email": "Email must be valid"
    })
  })
});

export { ticketSchema };
