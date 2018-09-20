const fs = require('fs');
const path = require('path');
const PATH_INPUT_FILE = process.argv[2];

if (!PATH_INPUT_FILE) {
  throw new Error('Input file path is empty!');
}

const fileUrl = path.resolve(PATH_INPUT_FILE);
const readFileStream = fs.createReadStream(fileUrl, { encoding: 'utf8' });

readFileStream.on('data', (chunk) => {
  console.log(`Chunk: ${chunk}`);
  console.log(`Chunk-Length: ${chunk.length}`);
  console.log(`Chunk-Type: ${typeof chunk}`);
});

readFileStream.on('end', () => {
  console.log(`End stream.`);
});

readFileStream.on('error', (err) => {
  console.error(err);
});
