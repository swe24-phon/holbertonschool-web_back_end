export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    if (student.location === city) {
      student.grade = gradeObj ? gradeObj.grade : 'N/A';
    } else {
      student.grade = student.grade || 'N/A';
    }

    return student;
  });
}
