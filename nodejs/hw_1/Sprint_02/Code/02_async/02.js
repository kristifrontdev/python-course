setTimeout(() => console.log(1));

process.nextTick(() => console.log(2));

Promise.resolve().then(() => console.log(3));

console.log(4);

setImmediate(() => console.log(5));