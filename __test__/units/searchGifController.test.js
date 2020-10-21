const searchGif = require('../../src/api/controller/searchGifController');
const {
  recipeLimit,
  recipeLimitEmpty
} = require('../mocks/contractReturnMock');

describe('Test Controller SearchGif', () => {
  it('should success return searchGif', async () =>{
    const search = await searchGif(recipeLimit);
    const key = Object.keys(search);
    expect(key.length).toBe(2)
  });
});