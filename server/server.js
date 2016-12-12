const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./db/models/user');
const mongoose = require('mongoose');
const router = require('./router.js');

mongoose.connect('mongodb://localhost/broccoli');
const db = mongoose.connection;

const app = express();

//mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//will pserve all static files

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to database'));

app.use(express.static('../client'));

router(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});