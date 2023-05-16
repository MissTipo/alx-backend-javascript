console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  let input; // = process.stdin.read()
  while ((input === process.stdin.read()) !== null) process.stdout.write(`Your name is ${input}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
