setTimeout(() => console.log(1));

process.nextTick(() => console.log(2));

new Promise((resolve) =>{
    console.log(3);
    resolve();
}).then(()=> console.log(4));

console.log(5);

setImmediate(() => console.log(5));