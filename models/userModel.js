'use strict';
const pool = require('../database/db.js');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.execute('SELECT name, email FROM wop_user');
    return rows;
  }
  catch (e) {
    console.log('userModel', e.message);
  }
};

const getUser = async (id) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT name, email FROM wop_user WHERE user_id = ?', [id]);
    return rows;
  }
  catch (e) {
    console.log('userModel', e.message);
  }
};

const insertUser = async (req) => {
  try {
    const [rows, fields] = await promisePool.execute(
        'INSERT INTO wop_user (name,email,password) VALUES (?,?,?);',
        [req.body.name, req.body.email, req.body.password]);
    console.log('userModel insert', rows, fields);
    return rows.insertId;
  }
  catch (e) {
    console.log(e);
  }
};

const updateUser = async (id, req) => {
  try {
    const [rows] = await promisePool.execute(
        'UPDATE wop_user SET name = ?, email = ?, password = ? WHERE user_id = ?;',
        [req.body.name, req.body.email, req.body.password, id]);
    console.log('userModel update', rows);
    return rows.affectedRows === 1;
  }
  catch (e) {
    console.log(e);
  }
};

const deleteUser = async (id, req) => {
  try {

  }
  catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser
};
