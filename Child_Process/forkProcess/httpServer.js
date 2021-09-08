const http = require('http');
const { fork } = require('child_process');

const requestListener = (req, res) => {
    if(req.url === '/slow') {
        // slowWorkingFunction();
        // console.log(`Slow function successfully executed/ timestamp: ${new Date()}`);
        // res.setHeader('Content-Type', 'application/json');
        // res.writeHead(200);
        // res.end(`Slow function end, ${new Date()}`);
        const child = fork(__dirname + '/slowFunction');

        child.on('message', (message) => {
            console.log(`Slow function successfully executed/ timestamp: ${new Date()}`);
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(message);
        });

        child.send('START');
    }
    else if(req.url === '/fast') {
        console.log(`Fast function successfully executed/ timestamp: ${new Date()}`);
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(`Fast function end, ${new Date()}`);
    }
};

const server  = http.createServer(requestListener);
server.listen(8080, 'localhost', () => {
    console.log(`Server is running on http://localhost:8080`);
});