const fs = require('fs');

//DELETE FILE OR DIRECTORY

//sync
// try {
//   fs.unlinkSync('/tmp/hello');
//   console.log('successfully deleted /tmp/hello');
// } catch (err) {
//   console.log(err)
// }


//callback
// fs.unlink('/tmp/hello', (err) => {
//   if (err) console.log(err);
//   else console.log('successfully deleted /tmp/hello');
// });


//promise
(async function(path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('/tmp/hello');
