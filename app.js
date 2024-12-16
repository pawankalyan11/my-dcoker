const http = require('http');

const port = 3000;

const requestHandler = (req, res) => {
   res.end("Hello, DOcker");
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
   console.log('Server is running on http://localhost:${port}');

});