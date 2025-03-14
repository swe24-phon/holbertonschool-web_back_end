function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const gradeMap = new Map();
  newGrades.forEach((grade) => {
    gradeMap.set(grade.studentId, grade.grade);
  });

  return students.map((student) => {
    if (student.location === city) {
      const grade = gradeMap.get(student.id);
      return { ...student, grade: grade !== undefined ? grade : 'N/A' };
    }
    return student;
  });
}

export default updateStudentGradeByCity;
