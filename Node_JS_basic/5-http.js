const http = require('http');
const { readFileSync } = require('fs');
const { countStudents } = require('./3-read_file_async');
const app = http.createServer((req, res) => {
  res.write(req.url);
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  else if (req.url === '/students') {
    res.end('This is the list of our students\n');
  try {
    const result = countStudents(process.argv[2]);
    res.end(`${result.join('\n')}`);
  } catch(error){
    res.end('Cannot load the database');
  }}});
app.listen(1245);
module.exports = app;
