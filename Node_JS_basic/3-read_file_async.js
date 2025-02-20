const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    let students = data.split('\n');
    students = students.slice(1, students.length - 1);
    result = [];
    result[0]=(`Number of students: ${students.length}`);
    const fields = {};
    students.forEach((student) => {
      const field = student.split(',');
      if (!fields[field[3]]) {
        fields[field[3]] = [];
      }
      fields[field[3]].push(field[0]);
    });
    //delete fields.field;
    for (const field in fields) {
      if (fields[field].length > 0) {
        result[fields[field].length]=(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
    return result.join('\n') + '\n';
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
