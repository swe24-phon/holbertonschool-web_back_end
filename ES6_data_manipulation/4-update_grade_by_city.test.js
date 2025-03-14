import updateStudentGradeByCity from './4-update_grade_by_city';
import getListStudents from './0-get_list_students';

describe('updateStudentGradeByCity', () => {
  it('updateStudentGradeByCity is implemented correctly', () => {
    const students = getListStudents();
    const grades = [
      { studentId: 1, grade: 85 },
      { studentId: 5, grade: 90 },
    ];
    const value = updateStudentGradeByCity(students, 'San Francisco', grades);
    expect(value).toEqual([
      {
        id: 1,
        firstName: 'Guillaume',
        location: 'San Francisco',
        grade: 85,
      },
      {
        id: 2,
        firstName: 'James',
        location: 'Columbia',
        grade: 'N/A',
      },
      {
        id: 5,
        firstName: 'Serena',
        location: 'San Francisco',
        grade: 90,
      },
    ]);
  });
});
