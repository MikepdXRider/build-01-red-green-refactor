const pow = require('./pow.js');

describe('red-green-refactor build tests', () => {
  it('pow returns expected value', () => {
    expect(pow(5, 5)).toEqual(3125);
    expect(pow(-1, -2)).toEqual(1);
  });
});
