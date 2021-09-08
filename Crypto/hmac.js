const crypto = require('crypto');

const result = crypto.createHmac('sha256', 'password')
.update("текст")
.digest("hex");

console.log(result);
