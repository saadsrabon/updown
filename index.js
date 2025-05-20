

const app ={}
app.config = {
    port: 3000,
}

// Dependecies
const http = require('http');
 app.createServer = () => {
const server = http.createServer(app,app.handleRequest);
server.listen(app.config.port, () => {
    console.log(`Server is running on http://localhost:${app.config.port}`);
});
}
app.handleRequest = (req, res) => {
    // Handle incoming requests
   
    res.end('Hello, World!');
};

app.createServer();