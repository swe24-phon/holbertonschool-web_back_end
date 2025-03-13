export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const updatedStudents = students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      student.grade = gradeObj ? gradeObj.grade : 'N/A';
      return student;
    });

  const nonCityStudents = students.filter(
    (student) => student.location !== city,
  );
  return [...updatedStudents, ...nonCityStudents];
}
