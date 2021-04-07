/* eslint-disable linebreak-style */
import * as async from '../app';

test('load', async () => {
  const data = await async();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  expect(data).toEqual(expected);
});
