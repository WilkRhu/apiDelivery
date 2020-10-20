const express = require('express');
const router = express.Router();
const recipePuppy = require('../api/controller/recipePuppy');

router.get('/recipes', recipePuppy.returnRecipe);

module.exports = router;