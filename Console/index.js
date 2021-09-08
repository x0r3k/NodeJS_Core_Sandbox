const { Console } = require('console');
const fs = require('fs');
// const { Console } = console; -> the same as above
// let test = console.Console; -> the same as above

function getDate() {
  let date = new Date();
  let month =  ("0" + date.getMonth() + 1).slice;
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

//logger
const outputLogger = fs.createWriteStream(`./${getDate()}_logger.log`, {flags:'a'});
const outputError = fs.createWriteStream(`./${getDate()}_error.log`, {flags:'a'});

const console = new Console({ stdout: outputLogger, stderr: outputError });
// const count = 5;
console.log('output');
console.error('error');

console.log(process.stdout.write('simple text'));
