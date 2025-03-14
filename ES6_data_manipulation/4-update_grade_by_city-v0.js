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
  const cityStudents = students.filter((student) => student.city === city);
  const updatedCityStudents = cityStudents.map((student) => ({
    ...student,
    grade: grades[student.id] || student.grade,
  }));
  const remainingStudents = students.filter((student) => student.city !== city);
  return [...remainingStudents, ...updatedCityStudents];
}
