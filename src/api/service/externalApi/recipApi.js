const axios = require('axios');

const api = axios.create({
  baseURL: "http://www.recipepuppy.com/api"
});

module.exports = api;