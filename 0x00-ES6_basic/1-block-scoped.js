export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; /* disable eslint */
    const task2 = false; /* disable eslint */
  }

  return [task, task2];
}
