console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const prompt = process.stdin.read();
  if (prompt !== null) {
    process.stdout.write(`Your name is: ${prompt}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
