// Dependecies
const http = require("http");
const helpers = require("./helpers");
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
app.handleRequest = helpers.handlers

app.createServer();
