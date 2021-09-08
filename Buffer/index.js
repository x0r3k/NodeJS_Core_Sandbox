// const buffer = Buffer.alloc(10, 1);
// console.log(buffer);

// const bufferUnsafe = Buffer.allocUnsafe(100);
// console.log(bufferUnsafe);

// const str = '\u00bd + \u00bc = \u00be';
// str.split('').forEach(item => {
//     console.log(`${str}: ${str.length} characters, ${Buffer.byteLength(item, 'utf8')} bytes`);
// });

// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('BCE');
// const buf3 = Buffer.from('ABCD');
// console.log(buf1.compare(buf1));
// console.log(buf1.compare(buf2));
// console.log(buf1.compare(buf3));
// console.log(buf2.compare(buf1));
// console.log(buf2.compare(buf3));

// const buf = Buffer.from('string');
// const str = 'string';
// console.log(Buffer.isBuffer(buf), Buffer.isBuffer(str));
// console.log(buf[0]);
// buf.entries().forEach(item => console.log(item));

// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('ABC');
// const buf3 = Buffer.from('ABCD');
// console.log(buf1.equals(buf2), buf1.equals(buf3));

// const buf = Buffer.allocUnsafe(30);
// console.log(buf);
// const buf1 = buf.subarray(0,10).fill('h');
// console.log(buf, buf1);

const buf = Buffer.allocUnsafe(30);
console.log(buf.toString());

