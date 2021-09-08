require('dotenv').config();
const cors = require('cors');
const cluster = require('cluster');
const express = require('express');
const bodyParser = require('body-parser');
const numCPUs = require('os').cpus().length;
const usersRouter = require('./src/api/routers/users.router');
const DBC = require('./db/connection');

const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 8082;
// const httpServer = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('hello world'));

app.use('/user', usersRouter);

app.use('*', (req, res) => {
  res.status(404).send('Page not found!');
});

if(cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  console.log(`Creating ${numCPUs} worker clusters`);

  for(let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('message', (worker, message, handle) => {
    console.log("Master (message): ", { wid: worker.id, pid: process.pid, wpid: worker.process.pid}, message);
  });

  cluster.on('listening', (worker, address) => {
    console.log(`Master (listening): A worker ${worker.process.pid} is now connected to ${address.address}:${address.port}`);
  });

  cluster.on('exit', (worker, code) => {
    console.log(`Master (exit): Worker ${worker.id} finished. Exit code: ${code}`);
    cluster.fork();
  });
}
else {
  DBC.checkConnection()
  .then(async () => {
    app.listen(HTTP_PORT, "localhost", () => {
      console.log(`Worker (listening): Listening on port = ${HTTP_PORT}, ENV = ${process.env.NODE_ENV}, Worker ID ${process.pid}`);
    });
  })
  .catch(err => {
    console.log(err);
    httpServer.close();
  });
}

