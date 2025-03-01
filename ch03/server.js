require('dotenv').config()
const http = require('http');
const {log} = require("./logger");

const hostname = process.env.HOST
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(5000, "localhost", () => {
  log(`Server running at http://${hostname}:${port}/`);
});