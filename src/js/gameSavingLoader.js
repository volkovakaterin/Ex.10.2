/* eslint-disable linebreak-style */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const dataJson = await json(data);
      return JSON.parse(dataJson);
    } catch (err) {
      return err;
    }
  }
}
