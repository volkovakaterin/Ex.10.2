/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */

import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader', () => jest.fn().mockImplementationOnce(() => Promise.reject('error')));

test('read', () => {
  expect.assertions();
  const expectedError = new Error('error');
  read.mockImplementationOnce(() => Promise.reject(expectedError));
  return GameSavingLoader.load()
    .catch((error) => {
      expect(error).toBe('error');
    });
});
