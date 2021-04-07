/* eslint-disable linebreak-style */
import read from '../reader';

test('parser', () => read().then((data) => {
  const expected = [];
  expect(data).toEqual(expected);
}));
