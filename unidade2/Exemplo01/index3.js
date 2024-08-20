import $fs from 'fs';
  
const reader = $fs.createReadStream('log.txt', {
    flag: 'r', encoding: 'UTF-8',
    start: 5, end: 200, highWaterMark: 10
});
  
reader.on('data', (chunk) => { console.log(chunk); });