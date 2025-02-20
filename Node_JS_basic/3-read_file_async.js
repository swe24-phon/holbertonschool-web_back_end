const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    let students = data.split('\n');
    students = students.slice(1, students.length - 1);
    const output = [];
    total = (`Number of students: ${students.length}`);
    const fields = {};
    students.forEach((student) => {
      const field = student.split(',');
      if (!fields[field[3]]) {
        fields[field[3]] = [];
      }
      fields[field[3]].push(field[0]);
    });
    i = 1
    groups = []
    for (const field in fields) {
      if (fields[field].length > 0) {
         groups[i]= (`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
         i++;
      }
    }    
    //return output.join('\n');
    output.push(total, groups[1], groups[2]);
    return output.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
