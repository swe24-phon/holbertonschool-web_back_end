import fs from "fs";

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split("\n");
        const students = {};

        lines.forEach((line) => {
          const [firstname, , , field] = line.split(",");
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        });

        resolve(students);
      }
    });
  });
};

export default readDatabase;
// module.exports = readDatabase;
