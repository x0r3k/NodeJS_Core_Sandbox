const path = require('path');

const notes = '/users/joe/notes.txt';

let fileNames = {
  dirname: null,
  basename: null,
  extname: null,
  nameWithoutExt: null
}

fileNames.dirname = path.dirname(notes); // /users/joe
fileNames.basename = path.basename(notes); // notes.txt
fileNames.extname = path.extname(notes); // .txt
fileNames.nameWithoutExt = path.basename(notes, path.extname(notes)); // notes.txt

console.log(fileNames);