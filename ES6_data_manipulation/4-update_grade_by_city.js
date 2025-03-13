import { Student } from './0-get_list_students';

export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      student.grade = gradeObj ? gradeObj.grade : 'N/A';
      return student;
    })
    .concat(students.filter((student) => student.location !== city));
}
