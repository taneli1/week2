'use strict';
const pool = require('../database/db.js');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('catModel', e.message);
  }
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM wop_cat WHERE cat_id = ${id}`);
    return rows;
  } catch (e) {
    console.log('catModel', e.message);
  }
};


module.exports = {
  getAllCats,
  getCat
};
