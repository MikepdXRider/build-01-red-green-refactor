const pow = require('./pow.js');

describe('red-green-refactor build tests', () => {
  it('pow returns expected value', () => {
    const actual = pow(5, 5);

    expect(actual).toEqual(3125);
  });
});
