// Dependecies
const http = require("http");
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

  console.log(trimPath);

  //method 
  //headers 
  //body
  // decoder for buffer data
  console.log(query);
  res.end('hello world');
};

app.createServer();
