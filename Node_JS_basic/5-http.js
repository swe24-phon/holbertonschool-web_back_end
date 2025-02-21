const http = require('http');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((result) => {
        res.write(`Number of students: ${result.total}\n`);
        for (const [field, data] of Object.entries(result.fields)) {
          res.write(`Number of students in ${field}: ${data.count}. List: ${data.list.join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);
module.exports = app;
