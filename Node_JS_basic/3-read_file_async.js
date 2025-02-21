const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Skip header
    
    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    const result = {
      total: students.length,
      fields: {},
    };
    
    for (const [field, names] of Object.entries(fields)) {
      result.fields[field] = {
        count: names.length,
        list: names,
      };
    }

    console.log(`Number of students: ${result.total}`);
    for (const [field, data] of Object.entries(result.fields)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.list.join(', ')}`);
    }

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
