export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => {
    if (student.location === city) {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      student.grade = gradeObj !== undefined ? gradeObj.grade : 'N/A';
    }
    return student;
  });
}
