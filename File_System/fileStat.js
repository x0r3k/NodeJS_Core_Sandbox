const fs = require('fs')

const filePath = 'text.txt';

// try {
//   const stats = fs.statSync('text.txt');
//   console.log(stats, stats.isFile());
// } catch (err) {
//   console.error(err)
// }

// fs.access(filePath, fs.constants.F_OK, (err) => {
//   console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
// });

const util = require('util');
let query = util.format('select `%s` from table', 'column1');
console.log(query);