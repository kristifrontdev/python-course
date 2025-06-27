console.log(1);

setTimeout(()=> console.log(2));

new Promise((resolve) =>{
    console.log(3);
    resolve();
}).then(()=> console.log(4))
    .then(()=> console.log(5));

new Promise(resolve => {
    console.log(6);
    resolve();
}).then(()=> console.log(7))
    .then(()=> console.log(8));

setTimeout(()=> console.log(9));