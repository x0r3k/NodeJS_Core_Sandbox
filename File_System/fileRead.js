const fs = require('fs')

const filePath = 'text.txt';
//CALLBACK BASED
fs.readFile(filePath, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
});

// SYNC
try {
  const data = fs.readFileSync(filePath, 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}