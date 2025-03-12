function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  } else {
    arr = students.map((student) => student.id);
  }

  return [...arr];
}
