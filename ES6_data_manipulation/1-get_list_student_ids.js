function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const arr = students.map((student) => student.id);

  return [...arr];
}

export default getListStudentIds;
