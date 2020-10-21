const apiGif = require('../../src/api/service/externalApi/gifAPi');

describe('Test Api Recipe', () =>{
  it('should success response api', async () => {
    const gif = await apiGif.get('&q=tomato');
    expect(gif.status).toBe(200)
    expect(gif.statusText).toBe('OK')
  });

  it('should error return response api', async () => {
    const gif =  await apiGif.get('&q=')
    expect(gif.data.length).toBe(undefined)
  })
})