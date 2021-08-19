const getUserName = require('../src/getUserName')

describe('getUserName function', () => {
  it('returns the name "Mark" when given the id "1"', () => {
    const expected = 'Mark';
    const actual = getUserName(1);

    return expect(actual).resolves.toBe(expected);
  })
  it('throws an error if the user is not found', () => {
    const expected = new Error('User with 3 not found.');
    const actual = getUserName(3);

    return expect(actual).rejects.toThrowError(expected);
  })
})

describe('ASYNC/AWAIT getUserName function', () => {
  it('returns the name "Mark" when given the id "1"', async () => {
    const expected = 'Mark';
    const actual = await getUserName(1);

    expect(actual).toBe(expected);
  })
  it('throws an error if the user is not found', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toEqual('User with 3 not found.');
    }
  })
})