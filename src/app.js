require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(router);
app.use(cors());

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;