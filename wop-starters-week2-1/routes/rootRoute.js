'use strict';
// root routes

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('rootRoute: root route with req:');
  res.send('test get');
});

router.post('/', (req, res) => {
  res.send('test post');
  console.log('rootRoute: ' + req.body);
});

router.put('/', (req, res) => {
  res.send('test put');
});

router.delete('/', (req, res) => {
  res.send('test delete');
});

module.exports = router;
