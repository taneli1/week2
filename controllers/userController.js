'use strict';

const userModel = require('../models/userModel');
const users = userModel;

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get_by_id = async (req, res) => {
  const user = await userModel.getUser(req.params.id);
  res.json(user);
};

const user_create = async (req, res) => {
  console.log('user_create', req.body);
  const user = await userModel.getUser(await userModel.insertUser(req));
  res.send(user);
};

const user_update = async (req, res) => {
  const updateOk = await userModel.updateUser();
  res.send('user updated');
};

const user_delete = async (req, res) => {
  res.send('deleted');
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_create,
  user_update,
  user_delete,
};