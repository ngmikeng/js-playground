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
      if (!dest) {
        const urlSplit = url.split('.');
        const fileType = getFileType(url);
        dest = 'file.' + fileType;
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
          res.pipe(file);

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
