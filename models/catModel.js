'use strict';

const pool = require('../database/db.js');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
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
    const [rows, fields] = await promisePool.query(
        'INSERT INTO wop_cat (name,age,weight,owner,filename) VALUES (?,?,?,?,?);',
        [
          req.body.name, req.body.age, req.body.weight, req.body.owner,
          req.file.filename]);
    console.log('catModel insert', rows, fields);
    return rows.insertId;
  }
  catch (e) {
    console.log(e);
  }
};

const updateCat = async (id, req) => {
  try {
    console.log(`??? + ${req.body.name + req.body.age + req.body.weight + req.body.owner + id}`)
    const [rows] = await promisePool.execute(
        'UPDATE wop_cat SET name = ?, age = ?, weight = ?, owner = ? WHERE cat_id = ?;',
        [req.body.name, req.body.age, req.body.weight, req.body.owner, id]);
    console.log('catModel update', rows);
    return rows.affectedRows === 1;
  }
  catch (e) {
    console.log(e);
  }
};

const deleteCat = async (id) => {
  try {
    const [rows] = await promisePool.execute(
        'DELETE FROM wop_cat WHERE cat_id = ?;',
        [id]
    )
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

