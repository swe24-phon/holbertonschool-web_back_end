import countStudents from './3-read_file_async.js';

countStudents("/home/work/holbertonschool-web_back_end/Node_JS_basic/database.csv")
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
console.log("After!");
