const readDatabase = async (path) => {
//   try {
//     const data = await  require(path)
//     return data;
//   } catch (error) {
//     throw new Error('Cannot load the database');
//   }
// };
import fs from 'fs';
          
function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const lines = data.trim().split('\n');
                const fieldNames = lines.shift().split(',');
                const students = {};

                lines.forEach(line => {
                    const [firstname, , , field] = line.split(',');
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(firstname);
                });

                resolve(students);
            }
        });
    });
}

export default readDatabase;
//module.exports = readDatabase;
