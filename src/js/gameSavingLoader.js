/* eslint-disable linebreak-style */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      return json(data);
    } catch (err) {
      return err;
    }
  }
}
