const { convertString, limitApiRecipe } = require('../../src/api/utils/logicFunctions');
const {
  data,
  keysReturn
} = require('../mocks/logicFunction');

describe('Test Function convertString', () => {
  it('should success return object', () => {
    const coverStr = convertString("tomato,onion");
    expect(coverStr).toBeInstanceOf(Object)
    expect(coverStr.ig1).toBe("tomato")
    expect(coverStr.ig2).toBe("onion")
  });

  it('should success return object', () => {
    const coverStr = convertString("tomato,onion,radish");
    expect(coverStr).toBeInstanceOf(Object)
    expect(coverStr.ig1).toBe("tomato")
    expect(coverStr.ig2).toBe("onion")
    expect(coverStr.ig1).toBe("tomato")
    expect(coverStr.ig3).toBe("radish")
  });

  it('should error max value', () => {
    const coverStr = convertString("tomato,onion,radish,radish");
    expect(coverStr.error).toBe("Max value 3")
    expect(coverStr.status).toBe(400)
  });

});

describe('Test function LimitApiRecipe', () => {
  it('should success return object', () => {
    const limApiReci = limitApiRecipe({ data });
    expect(limApiReci).toBeInstanceOf(Array)
  });

  it('should success return object compare keys', () => {
    const limApiReci = limitApiRecipe({ data });
    const key = Object.keys(limApiReci);
    expect(key).toEqual(keysReturn);
  });

})