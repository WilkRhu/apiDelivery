require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const app = express();


app.use(bodyParser.json());
app.use(router);
app.use(cors());

module.exports = app;