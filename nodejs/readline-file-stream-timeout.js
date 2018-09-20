const fs = require('fs');
const path = require('path');
const readline = require('readline');
const PATH_INPUT_FILE = process.argv[2];

if (!PATH_INPUT_FILE) {
  throw new Error('Input file path is empty!');
}

const fileUrl = path.resolve(PATH_INPUT_FILE);
const readFileStream = fs.createReadStream(fileUrl);
const rl = readline.createInterface({
  input: readFileStream,
  output: process.stdout
});

let countLines = 0;
let currentIndex = 0;
let delay = 0;
rl.on('line', (line) => {
  countLines++;
  delay = delay + 1000;
  setTimeout(() => {
    console.log(`Current line: ${++currentIndex}`);
    console.log(`Content: ${line}`);
  }, delay);
});

readFileStream.on('end', () => {
  console.log(`Number of Lines: ${countLines}`);
  rl.close();
});

readFileStream.on('error', (err) => {
  console.error(err);
  rl.close();
});
