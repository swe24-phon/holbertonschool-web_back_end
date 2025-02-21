const http = require('http');
const { readFileSync } = require('fs');
const { countStudents } = require('./3-read_file_async');
const app = http.createServer((req, res) => {
  res.write(req.url)
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  else if (req.url === '/students') {
    res.end('This is the list of our students\n');
    countStudents(process.argv[2])
      .then(({ students, studentsByCS, studentsBySWE }) => {
        res.write('Number of students: ' + students.length + '\n');
        res.write('Number of students in CS: ' + studentsByCS.length + '. List: ' + studentsByCS.join(', ') + '\n');
        res.write('Number of students in SWE: ' + studentsBySWE.length + '. List: ' + studentsBySWE.join(', ') + '\n');
        res.end();
      })
      .catch((error) => {
        res.write('This is the list of our students\n');
        res.end('Error: ' + error.message);
      });

  }  
}).listen(1245);
module.exports = app;
