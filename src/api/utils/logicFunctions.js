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
  if (object.length !== 0) {
    return object;
  }
  return {
    error: "Object no create",
    status: 400

  }
};

const convertString = (i) => {
  const array = i.split(',')
  if (array.length <= 3) {
    const object = Object({
      ig1: array[0],
      ig2: array[1],
      ig3: array[2]
    });

    return object;
  }
  return {
    error: "Max value 3",
    status: 400
  }
};

module.exports = {
  limitApiRecipe,
  convertString
}