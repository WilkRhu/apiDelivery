const contractReturn = require('../../src/api/service/contractReturn/contractReturn');
const {
  recipeLimit,
  gifReturn,
  value,
  keyReturn
} = require('../mocks/contractReturnMock');

describe('Test Function contractReturn', () => {
  it('should success return contractReturn', () => {
    const contract = contractReturn(recipeLimit, gifReturn, value);
    const keys = Object.keys(contract);
    expect(contract).toBeInstanceOf(Object)
    for (let i = 0; i < keys.length; i++) {
      expect(keys[i]).toBe(keys[i])
    }
  })
})