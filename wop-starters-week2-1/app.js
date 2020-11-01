'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rootRoute = require('./routes/rootRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3000;

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/', rootRoute);
app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
