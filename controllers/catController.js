'use strict';
// catController

const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = async (req, res) => {
  const cat = await catModel.getCat(req.params.id);
  res.json(cat);
};

const cat_create = (req, res) => {
  // Create a cat with data coming from req...
  res.send(`cat created with id: ...`);
};

module.exports = {
  cat_list_get,
  cat_create,
  cat_get_by_id,
};