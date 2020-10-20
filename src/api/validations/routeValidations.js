const Joi = require('@hapi/joi');

const routeValidation = Joi.object({
  ig1: Joi.string().required(),
  ig2: Joi.string().optional(),
  ig3: Joi.string().optional(),
});

module.exports = routeValidation;