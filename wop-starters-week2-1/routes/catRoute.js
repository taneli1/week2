'use strict';
// catRoute
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('From this endpoint you can get all cats.');
});

router.get('/:id' , (req,res) =>{
  res.send(`You requested a cat whose id is ${req.params.id}.`)
})

module.exports = router;