const http = require('http');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(process.argv[2])
        .then((result) => {
          res.end(result.join('\n'));
        })
        .catch((error) => {
          res.end(error.message);
        });
    } catch (error) {
      res.end('Cannot load the database');
    }
  }});

app.listen(1245);
module.exports = app;
