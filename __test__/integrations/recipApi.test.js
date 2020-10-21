const api = require('../../src/api/service/externalApi/gifAPi');

describe('Test Api Recipe', () =>{
  it('should success response api', async () => {
    const recipe = await api.get('/?i=onions,tomato');
    expect(recipe.status).toBe(200)
    expect(recipe.statusText).toBe('OK')
  });

  it('should error return response api', async () => {
    const recipe =  await api.get('/?i=');
    expect(recipe.data.length).toBe(undefined)
  })
})