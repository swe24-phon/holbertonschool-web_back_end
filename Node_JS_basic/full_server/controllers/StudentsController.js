//

import readDatabase from "../utils";

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];

    readDatabase(database)
      .then((students) => {
        let message = "This is the list of our students\n";
        for (const field in students) {
          message += `Number of students in ${field}: ${
            students[field].length
          }. List: ${students[field].join(", ")}\n`;
        }
        response.status(200).send(message.trim());
      })
      .catch(() => {
        response.status(500).send("Cannot load the database");
      });
  }

  static getAllStudentsByMajor(request, response) {
    const database = process.argv[2];
    const { major } = request.params;

    if (major !== "CS" && major !== "SWE") {
      response.status(500).send("Major parameter must be CS or SWE");
      return;
    }

    readDatabase(database)
      .then((students) => {
        const list = students[major] ? students[major].join(", ") : "";
        response.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        response.status(500).send("Cannot load the database");
      });
  }
}

export default StudentsController;
