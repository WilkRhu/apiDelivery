const axios = require('axios');

const apiGif = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/search?api_key=oZRd1z2QlMWZ3HuS8uVCBOCVPFOfvA2M&https://api.giphy.com/v1/gifs/search?api_key=oZRd1z2QlMWZ3HuS8uVCBOCVPFOfvA2M&limit=2&offset=0&rating=g&lang=en&limit=25&offset=0&rating=g&lang=en",
  timeout: 1000
});

module.exports = apiGif;