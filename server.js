const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer((request, response) => {
  response.end('Howdy World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
