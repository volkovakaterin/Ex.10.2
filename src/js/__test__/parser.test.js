/* eslint-disable linebreak-style */
import json from '../parser';

test('parser', () => json().then((data) => {
  const expected = '';
  expect(data).toEqual(expected);
}));
