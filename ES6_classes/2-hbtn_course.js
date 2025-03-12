export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (
      !Array.isArray(students) ||
      !students.every((student) => typeof student === 'string')
    ) {
      throw TypeError('Students must be an array of strings');
    }
    if (length <= 0) {
      throw RangeError('Length must be greater than 0');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (newLength <= 0) {
      throw RangeError('Length must be greater than 0');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (
      !Array.isArray(newStudents) ||
      !newStudents.every((student) => typeof student === 'string')
    ) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
