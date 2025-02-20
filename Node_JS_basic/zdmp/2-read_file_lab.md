# Lab: Reading and Processing CSV Files in Node.js

## Overview
This lab demonstrates how to read and process CSV files using Node.js's built-in `fs` module.

## Code Explanation

### 1. Importing Required Modules
```javascript
const fs = require('fs');
```
- `fs`: Node.js's built-in module for file system operations

### 2. The `countStudents` Function
```javascript
function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    
    // Process data
    let students = data.split('\n'); // Split file content by newlines
    
    // Clean up the data:
    // - Remove the first line (header row)
    // - Remove the last line (empty line from trailing newline)
    students = students.slice(1, students.length - 1);
    
    // Example transformation:
    // Before:
    // ["firstname,lastname,age,field", "John,Doe,20,CS", "Jane,Smith,21,Math", ""]
    // After:
    // ["John,Doe,20,CS", "Jane,Smith,21,Math"]
    
    // Output total number of students
    console.log(`Number of students: ${students.length}`);
    
    // Group students by field
    const fields = {}; // Create an empty object to store grouped students
    
    // Iterate through each student record
    students.forEach((student) => {
      // Split the student record into individual fields
      const field = student.split(','); // field[0]=firstname, field[3]=field of study
      
      // Check if the field of study exists in our grouping object
      // field[3] contains the field name (e.g., 'CS' or 'Math')
      // fields[field[3]] accesses the array for that specific field
      if (!fields[field[3]]) {
        // If not, create an empty array for this field
        fields[field[3]] = [];
      }
      
      // Add the student's firstname to their field's array
      // field[0] contains the student's first name
      fields[field[3]].push(field[0]);
      
      // Example of what 'fields' might look like:
      // {
      //   'CS': ['John', 'Alice'],
      //   'Math': ['Jane', 'Bob']
      // }
    });
    
    // Output students by field
    for (const field in fields) {
      if (fields[field].length > 0) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
```

### 3. Key Concepts
- **File Reading**: Using `fs.readFileSync` to read files synchronously
- **String Manipulation**: Using `split()` and `join()` for CSV processing
- **Error Handling**: Using try-catch for file operation errors
- **Data Grouping**: Using objects to group students by their field

### 4. Example Usage
1. Create a CSV file (e.g., `database.csv`) with student data
2. Create a test script:
```javascript
const countStudents = require('./2-read_file');
countStudents('database.csv');
```
3. Run the script:
```bash
node test.js
```

### 5. Sample Output
```
Number of students: 4
Number of students in CS: 2. List: John, Alice
Number of students in Math: 2. List: Jane, Bob
```

## Exercises
1. Modify the code to handle different CSV formats
2. Add asynchronous file reading using `fs.readFile`
3. Implement error handling for malformed CSV data
