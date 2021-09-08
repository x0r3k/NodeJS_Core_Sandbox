const crypto = require('crypto');
const initVectorContainer = Buffer.allocUnsafe(16);
// const initVectorContainer1 = Buffer.allocUnsafe(16);

const initVector = crypto.createHash('sha256').update('init_vector_hash').digest();

initVector.copy(initVectorContainer, 0, 0, 16);
// initVector.copy(initVectorContainer1);

// console.log(initVectorContainer, initVectorContainer1);

const key = crypto.createHash("sha256").update('key_hash').digest();

const cipher = crypto.createCipheriv("aes256", key, initVectorContainer);
let encrypted = cipher.update("текст", "utf8", "hex");
encrypted += cipher.final('hex');

// cipher.update("текст2");

//using the same key and IV as for encrypting
const decipher = crypto.createDecipheriv("aes256", key, initVectorContainer);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final('utf8');

console.log({encrypted, decrypted});