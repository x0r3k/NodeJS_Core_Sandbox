const path = require('path');

// PATH JOIN
const name = 'joe';
// const joinedPath = path.join('/', 'users', name, 'notes.txt'); // \users\joe\notes.txt
const joinedPath = path.join(__dirname, '../db/script.sql'); // \users\joe\notes.txt
console.log(joinedPath);

// PATH RESOLVE
// const pathResolve = path.resolve('joe.txt'); // C:\Users\kdolhopolov\Projects\Sandbox\Studying\Node.JS\Path\joe.txt - current path + passed filename
// const pathResolve = path.resolve('tmp', 'etc', 'joe.txt') // C:\Users\kdolhopolov\Projects\Sandbox\Studying\Node.JS\Path\tmp\etc\joe.txt - current path + passed directories + passed filename
// const pathResolve = path.resolve('/etc', 'joe.txt') // C:\etc\joe.txt - absolute path(slash before folder name) + passed name
const pathResolve = path.resolve('tmp', '/etc', 'test', 'joe.txt'); // if folder name with slash then all folder names before it is ignored
// console.log(pathResolve);

// PATH NORMALIZE
// const pathNormalize = path.normalize('/users/joe/..//test.txt');
// console.log(pathNormalize);