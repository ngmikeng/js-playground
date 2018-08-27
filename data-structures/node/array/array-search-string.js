const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

rl.question('Enter a name for search: ', input => {
  const position = names.indexOf(input);
  if (position > -1) {
    console.log(`Found ${input} begin at the position ${position}.`);
  } else {
    console.log(`Not found ${input} in array.`);
  }

  rl.close();
});
