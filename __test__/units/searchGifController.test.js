const searchGif = require('../../src/api/controller/searchGifController');
const {recipeLimit} = require('../mocks/contractReturnMock');

describe('Test Controller SearchGif', () => {
  it('should success return searchGif', async () =>{
    const search = await searchGif(recipeLimit);
    expect(search[0]).toBe('https://media4.giphy.com/media/QW3t9kBOqPPRAsDesU/giphy.gif?cid=757dbf07s1ykb54bg1ivxgeel4pj46gxfndtsgfw5qg02iq2&rid=giphy.gif')
    expect(search[1]).toBe('https://media4.giphy.com/media/QW3t9kBOqPPRAsDesU/giphy.gif?cid=757dbf07s1ykb54bg1ivxgeel4pj46gxfndtsgfw5qg02iq2&rid=giphy.gif')
  })
})