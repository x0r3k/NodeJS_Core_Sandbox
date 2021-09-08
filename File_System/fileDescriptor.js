const fs = require('fs')
var fileName = "text.txt";


// get information about the file
fs.stat(fileName, function(error, stats) {
  if (error) handleError(error);
  // console.log(stats);
  // open the file (getting a file descriptor to it)
  fs.open(fileName, "r", function(error, fd) {
    //alloc new Buffer with size of file
    let buffer = Buffer.allocUnsafe(stats.size);
    // console.log(buffer);

    // read its contents into buffer
    fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
      if(error) handleError(error);
      var data = buffer.toString("utf8", 0, buffer.length);
      console.log(buffer)
      console.log(data);
      fs.close(fd, (err) => {
        console.log(err)
      });
    });
  });
});


function handleError(error) {
  console.error(error);
  process.exit(1);
}