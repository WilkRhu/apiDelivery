const express = require('express');
const router = express.Router();
const recipePuppyController = require('../api/controller/recipePuppyController');

router.get('/recipes', recipePuppyController.returnRecipe);

module.exports = router;