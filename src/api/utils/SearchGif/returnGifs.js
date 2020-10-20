const gifApi = require('../../service/externalApi/gifAPi');

const returnGifs = async (array) => {
  const arrayGifs = [];
  const arrayTwoGifs = [];
  for (let i = 0; i < array.length; i++) {
    const {data} = await gifApi.get(`&q=${array[i].recipes[0].title}`);
    arrayGifs.push(data);
  }
  for (let i = 0; i < arrayGifs.length; i++) {
    arrayTwoGifs.push(arrayGifs[i].data[0].images.original.url)
  }
  
  return arrayTwoGifs;
}

module.exports = returnGifs;