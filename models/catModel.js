'use strict';
const pool = require('../database/db.js');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  }
  catch (e) {
    console.log('catModel', e.message);
  }
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_cat WHERE cat_id = ?', [id]);
    return rows;
  }
  catch (e) {
    console.log('catModel', e.message);
  }
};

const insertCat = async (req) => {
  try {
    const [rows, fields] = await promisePool.execute(
        'INSERT INTO wop_cat (name,age,weight,owner,filename) VALUES (?,?,?,?,?);',
        [
          req.body.name, req.body.age, req.body.weight, req.body.owner,
          req.body.name]);
    console.log('catModel insert', rows, fields);
    return rows.insertId;
  }
  catch (e) {
    console.log(e);
  }
};

const updateCat = async (id, req) => {
  try {
    const [rows] = await promisePool.query(
        'UPDATE wop_cat SET name = ?, age = ?, weight = ? WHERE cat_id = ?;',
        [req.body.name, req.body.age, req.body.weight, id]);
    console.log('catModel update', rows);
    return rows.affectedRows === 1;
  }
  catch (e) {
    console.log(e);
  }
};

const deleteCat = async (id, req) => {
  try {

  }
  catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllCats,
  getCat,
  insertCat,
  updateCat,
  deleteCat,
};

