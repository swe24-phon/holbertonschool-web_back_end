const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello Holberton School!');
  res.end();
  }).listen(1245);
  