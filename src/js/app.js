/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import GameSavingLoader from './gameSavingLoader';

export default (async () => {
  try {
    const saving = await GameSavingLoader.load();
    return JSON.parse(saving);
  } catch (err) {
    return err;
  }
})();
