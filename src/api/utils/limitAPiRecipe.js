const limitApiRecipe = (data) => {
  const object = [];
  for (let i = 0; i < 2; i++) {
    object.push({
    recipes: [{
      title: data.data.results[i].title,
      ingredients: data.data.results[i].ingredients,
      href: data.data.results[i].href,
      thumbnail: data.data.results[i].thumbnail
    }]
  })
  }
 
  return object;
};

module.exports = limitApiRecipe;