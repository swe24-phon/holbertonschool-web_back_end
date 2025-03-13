export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  if (typeof city !== 'string') {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  if (getListStudents.length === 0) {
    return [];
  }
  if (newGrades.length === 0) {
    return [];
  }
  const grades = {};
  newGrades.forEach((grade) => {
    grades[grade.studentId] = grade.grade;
  });
  const students = getListStudents();
  const updatedStudents = students.map((student) => {
    if (student.city === city) {
      return { ...student, grade: grades[student.id] };
    }
    return student;
  });
  return updatedStudents;
}
