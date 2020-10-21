const axios = require('axios');

const api = axios.create({
  baseURL: "http://www.recipepuppy.com/api",
  timeout: 5000
});

module.exports = api;