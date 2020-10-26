'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.');
});

app.get('/', (req, res) => {
  console.log('root route with req:');
  res.send('test get');
});

app.post('/', (req, res) => {
  res.send('test post');
  console.log(req.body);
});

app.put('/', (req, res) => {
  res.send('test put');
});

app.delete('/', (req, res) => {
  res.send('test delete');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
