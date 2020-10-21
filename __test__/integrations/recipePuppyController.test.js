const request = require('supertest');
const app = require('../../src/app');

describe('Test RecipePuppyController', () => {
  describe('GET', () => {
    it('should success router recipes', async () => {
      const recipes = await request(app).get('/recipes/?i=tomato,radish');
      console.log(recipes);
    })
  });
});