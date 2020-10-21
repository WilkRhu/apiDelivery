const api = require('../service/externalApi/recipApi');
const routeValidation = require('../validations/routeValidations');
const { convertString, limitApiRecipe } = require('../utils/logicFunctions');
const searchGif = require('./searchGifController');
const contractReturn = require('../service/contractReturn/contractReturn');

const returnRecipe = async (req, res) => {
  try {
    const {
      i
    } = req.query;
    const convert = convertString(i);
    if (convert.status !== 400) {
      const {
        error,
        value
      } = await routeValidation.validate(convert);
      if (!error) {
        const recipe = await api.get(`/?i=${value.ig1},${value.ig2},${value.ig3}`);
        const recipeLimit =  await limitApiRecipe(recipe);
        const gifReturn = await searchGif(recipeLimit);
        const objectReturn  = await contractReturn(recipeLimit, gifReturn, value);
        return res.status(200).json(objectReturn);
      }
      return res.status(400).json({
        error: error.message
      })
    }
    
    return res.status(400).json({
      error: convert.error
    })

  } catch (err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

module.exports = {
  returnRecipe
}