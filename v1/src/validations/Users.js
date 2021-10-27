const Joi = require('joi');

const createValidation = Joi.object({
	full_name: Joi.string().required().min(3),
	email: Joi.string().required().email().min(8),
	password: Joi.string().required().min(8),
});

const loginValidation = Joi.object({
	email: Joi.string().required().email().min(3),
	password: Joi.string().required().min(8),
});

module.exports = { createValidation, loginValidation };
