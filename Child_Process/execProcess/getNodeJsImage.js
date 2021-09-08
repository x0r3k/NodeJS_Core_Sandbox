const { execFile, exec } = require('child_process');

// exec('bash ./execProcess/processNodeJsImage.sh', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`error: ${error.message}`);
//         return;
//     }

//     if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return;
//     }

//     console.log(`stdout:\n${stdout}`);
// });

execFile('sh', ['./execProcess/processNodeJsImage.sh'], (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout:\n${stdout}`);
});