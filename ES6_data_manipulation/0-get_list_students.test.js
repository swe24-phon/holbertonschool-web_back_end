import getListStudents from './0-get_list_students';

describe('getListStudents', () => {
  it('is implemented correctly', () => {
    expect.assertions(1);
    expect(getListStudents()).toStrictEqual([
      { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
      { firstName: 'James', id: 2, location: 'Columbia' },
      { firstName: 'Serena', id: 5, location: 'San Francisco' },
    ]);
  });
});
