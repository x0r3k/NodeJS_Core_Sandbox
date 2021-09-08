const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log(this, this === myEmitter);
// });
// myEmitter.emit('event');


// const myEmitter1 = new MyEmitter();
// myEmitter1.on('event', function() {
//   console.log(this, this === myEmitter1);
// });
// myEmitter1.emit('event');


// const myEmitter2 = new MyEmitter();
// myEmitter2.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// myEmitter2.emit('event', 'a', 'b');
// console.log('sync code');

const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
myEE.emit('foo');