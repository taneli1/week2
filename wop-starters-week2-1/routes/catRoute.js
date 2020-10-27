'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController')

router.get('/', catController.cat_list_get);

router.get('/:id' , (req,res) =>{
  res.send(`You requested a cat whose id is ${req.params.id}.`)
})

module.exports = router;