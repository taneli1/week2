'use strict';

const userModel = require('../models/userModel');
const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get_by_id = (req, res) => {
  res.json(users.filter(user => user.id === req.params.id))
}

module.exports = {
  user_list_get,
  user_get_by_id
}