const addon = require('./build/Release/testaddon.node');
console.log(addon);

// function main() {
//     const arr = new Array(100000).fill().map(() => Math.random() * 1000);
//     const t1 = Date.now();
//     console.log(t1);
//     addon.bubbleSort(arr);
//     const t2 = Date.now();
//     console.log(t2);
//     console.log("difference: ", t2-t1);
// }

// main();