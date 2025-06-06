// Dependecies
const http = require("http");
const { StringDecoder } = require("string_decoder");
const url = require("url");
// app scafold
const app = {};
app.config = {
  port: 3000,
};

app.createServer = () => {
  const server = http.createServer(app, app.handleRequest);
  server.listen(app.config.port, () => {
    console.log(`Server is running on http://localhost:${app.config.port}`);
  });
};
app.handleRequest = (req, res) => {
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

app.createServer();
