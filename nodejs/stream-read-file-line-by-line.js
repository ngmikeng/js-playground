const fs = require('fs');
const es = require('event-stream');
const path = require('path');
const PATH_INPUT_FILE = process.argv[2];

if (!PATH_INPUT_FILE) {
  throw new Error('Input file path is empty!');
}

let countLines = 0;
const fileUrl = path.resolve(PATH_INPUT_FILE);
const readFileStream = fs.createReadStream(fileUrl, { encoding: 'utf8' })
  .pipe(es.split())
  .pipe(es.mapSync(line => {
    readFileStream.pause();
    setTimeout(() => {
      console.log(`Line: ${++countLines}`);
      console.log(`Content: ${line}`);
      readFileStream.resume();
    }, 1000);
  }));

readFileStream.on('end', () => {
  console.log(`End stream.`);
});

readFileStream.on('error', (err) => {
  console.error(err);
});
