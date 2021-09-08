const crypto = require('crypto');

const buf = crypto.randomBytes(256);
// crypto.randomBytes(16).toString('hex');
console.log(
  `${buf.length} bytes of random data: ${buf.toString('hex')}`);

console.log(arguments);