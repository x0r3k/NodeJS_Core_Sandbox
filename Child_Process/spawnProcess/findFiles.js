const { spawn } = require('child_process');

const result = spawn('find', ['.']);

result.stdout.on('data', (data) => {
    console.log(`stdout:\n${data}`);
});

result.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

result.on('error', (error) => {
    console.error(`error: ${error.message}`);
});

result.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});