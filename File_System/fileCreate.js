const fs = require('fs');

//CREATE FILE 

// \w fs.open
fs.open('text.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


// \w fs.appendFile
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// \w fs.writeFile
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
