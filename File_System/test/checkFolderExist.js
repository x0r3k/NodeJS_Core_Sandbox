const fs = require('fs');
const singleFolder = './tmp';
const nestedFolder = './tmp/etc';
const filePath = './tmp/test.js';

// fs.existsSync() checks if such path exists 
// it could be single folder, nested folders or file path
if (!fs.existsSync(nestedFolder)){
  console.log('not exists');
  // fs.mkdirSync() creates folder if it is not exists
  // it also can create nested folders with recursive: true option 
  fs.mkdirSync(nestedFolder, { recursive: true });
}
else {
  console.log('exists');
}