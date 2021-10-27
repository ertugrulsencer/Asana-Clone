const express = require('express');
const { create, index } = require('../controllers/Projects');
const router = express.Router();
const schemas = require('../validations/Projects');
const validate = require('../middlewares/validate');
const { authenticateToken } = require('../middlewares/authanticate');

router.route('/').get(authenticateToken, index);
router
	.route('/')
	.post(authenticateToken, validate(schemas.createValidation), create);

module.exports = router;
