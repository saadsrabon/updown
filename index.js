

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
    // console.log(`Received request for ${req.url}`);
    // res.end('Hello, World!');
    // You can add more logic here to handle different routes or methods
    if (req.method === 'GET' && req.url === '/about') {
        
        res.end('Hello, from the about page!');
    }

    

};

app.createServer();