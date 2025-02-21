const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const result = await countStudents(process.argv[2]);
    res.write(`Number of students: ${result.total}\n`);
    for (const [field, data] of Object.entries(result.fields)) {
      res.write(`Number of students in ${field}: ${data.count}. List: ${data.list.join(', ')}\n`);
    }
    res.end();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
//updated to use async await
