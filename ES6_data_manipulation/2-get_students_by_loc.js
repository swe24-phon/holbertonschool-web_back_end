function getStudentsByLocation(students, location) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (typeof location !== 'string') {
    return [];
  }
  if (students.length === 0) {
    return [];
  }

  const loc = students.filter((student) => student.location === location);
  return [...loc];
}

export default getStudentsByLocation;
