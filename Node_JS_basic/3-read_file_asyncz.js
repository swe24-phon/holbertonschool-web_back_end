import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import countStudents from './3-read_file_async.js';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('countStudents', () => {
  it('should resolve with correct student counts', async () => {
    const result = await countStudents('database.csv');
    const expectedOutput = [
      'Number of students: 4',
      'Number of students in CS: 2. List: John, Alice',
      'Number of students in Math: 2. List: Jane, Bob'
    ].join('\n');
    
    expect(result).to.equal(expectedOutput);
  });

  it('should reject with error for invalid file', async () => {
    await expect(countStudents('nonexistent.csv'))
      .to.be.rejectedWith('Cannot load the database');
  });
});
