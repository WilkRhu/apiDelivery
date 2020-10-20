const contractReturn = (recipeData, gif, value) => {
  const key = Object.values(value);
  const keywords = [];
  const recipes = [];
  key.map(item => {
    if (item !== undefined) {
      keywords.push(item);
    }
  })
  for (let i = 0; i < recipeData.length; i++) {
    recipes.push({
      title: recipeData[i].recipes[0].title,
      ingredients: recipeData[i].recipes[0].ingredients,
      link: recipeData[i].recipes[0].href,
      gif: gif[i]
    });
  }

  return {
    keywords,
    recipes
  }
}

module.exports = contractReturn;