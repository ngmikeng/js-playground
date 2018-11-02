const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const URL = process.argv[2];
const DEST = process.argv[3];

const getFileType = (url) => {
  const arr = url.split('.');
  return arr[arr.length - 1];
};

const getProtocol = (url) => {
  const arr = url.split('://');
  return arr[0];
};

const downloader = (url, dest) => {
  if (url) {
    try {
      const fileType = getFileType(url);
      const fileName = 'file-downloaded.' + fileType;
      if (!dest) {
        dest = fileName;
      } else {
        dest = path.join(path.normalize(dest), fileName);
      }
      const file = fs.createWriteStream(dest);
      const protocol = getProtocol(url);
      let resource = null;
      if (protocol.toLowerCase() === 'http') {
        resource = http;
      } else if (protocol.toLowerCase() === 'https') {
        resource = https;
      }
      if (resource) {
        const req = resource.get(url, (res) => {
          let fullDataLength = parseInt(res.headers['content-length'], 10);
          let currentDataLength = 0;
          res.pipe(file);
          res.on('data', function (data) {
            currentDataLength = currentDataLength + data.length;
            let progress = currentDataLength / fullDataLength * 100;
            console.log(`Progress: ${progress.toFixed(2)}`);
            // res.pause();
          });

          file.on('finish', () => {
            console.log('FINISH');
            file.close();
          });
        });

        req.on('error', (err) => {
          console.log('Request error:', err);
        });
      } else {
        throw new Error('resource/protocol is invalid');
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log('url & dest are required');
  }
};

downloader(URL, DEST);
