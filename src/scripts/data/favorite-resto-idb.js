/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestos() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestos(id) {
    return (await dbPromise).put(OBJECT_STORE_NAME, id);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestoIdb;
