export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => {
    let studentGrade = 'N/A';
    if (student.location === city) {
      const cityGrades = newGrades.filter(
        (grade) => grade.studentId === student.id,
      );
      if (cityGrades.length > 0) {
        studentGrade = cityGrades[0].grade;
      }
    }
    return { ...student, grade: studentGrade };
  });
}
