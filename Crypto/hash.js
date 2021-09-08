const crypto = require("crypto")
const bcrypt = require("bcryptjs")

// Approach #1 (Built-in crypto module)
let response = crypto.createHash("sha256")
  .update("текст")
  .digest('hex');

console.log(response);

// Approach #2 (Built-in crypto module)
// const hash = crypto.createHash("sha256");

// hash.on('readable', () => {
//   const data = hash.read();
//   if(data) {
//     console.log(data.toString('hex'));
//   }
// });

// hash.write('текст');
// hash.end();

// Approach #3 (Bcryptjs module)
var hash = bcrypt.hashSync("12345", 10);
bcrypt.compareSync("B4c0/\/", hash); // true
console.log(hash)