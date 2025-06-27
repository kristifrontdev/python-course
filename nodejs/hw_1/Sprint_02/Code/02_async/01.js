setTimeout(() => console.log('1'));

setImmediate(() => console.log('2'));

Promise.resolve().then(() => console.log('3'));

process.nextTick(() => console.log('4'));

console.log('5');