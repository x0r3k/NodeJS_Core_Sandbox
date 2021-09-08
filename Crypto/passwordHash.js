const crypto = require('crypto');


async function hashPassword(password) {
  return new Promise((resolve, reject) => {
    // generate random 16 bytes long salt
    const salt = crypto.randomBytes(16).toString('hex');

    crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
      if (err) reject(err);
      resolve({ salt, hash: derivedKey.toString('hex') });
    });
  });
}

async function verifyPassword(password, hash, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
      if (err) reject(err);
      resolve(hash === derivedKey.toString('hex'));
    });
  });
}

async function run() {
  const { salt: salt1, hash: hash1 } = await hashPassword('123456');
  const { salt: salt2, hash: hash2 } = await hashPassword('123456');
  console.log(salt1, hash1)
  console.log('password1', await verifyPassword('123456', hash1, salt1));
  console.log('password2', await verifyPassword('123456', hash2, salt2));
  console.log('password1 but salt2', await verifyPassword('123456', hash1, salt2));
  console.log('password2 but salt1', await verifyPassword('123456', hash2, salt1));
  console.log('password1 == password2', hash1 === hash2);
}

async function tracker () {
  console.time('wrapper');
  const response = await run();
  console.timeEnd('wrapper');
}

tracker();