/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import GameSavingLoader from '../gameSavingLoader';

test('load', async () => {
  const data = await GameSavingLoader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  expect(data).toEqual(expected);
});


test('error', async () => {
  await GameSavingLoader.load().catch((e) => {
    expect(e).toMatch('huhhuhhil');
  });
  expect.assertions();
});
