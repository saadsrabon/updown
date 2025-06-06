const { StringDecoder } = require("string_decoder");
const url = require("url");
const helpers = {};

helpers.handlers =(req, res) => {
  //parse url
  const parsesdUrl = url.parse(req.url, true);
  //query
  const query = parsesdUrl.query;
  //path
  const path = parsesdUrl.pathname;
  const trimPath = path.replace(/^\/+|\/+$/g, "");
  //method
  const method = req.method.toLowerCase(); 
  //headers 
  const headers = req.headers;
  //body
  // decoder for buffer data
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  })
  req.on('end', () => {
    buffer += decoder.end();
    console.log(buffer);
    res.end('hello world');
  })

};

module.exports = helpers;