console.log(1);

setTimeout(()=> console.log(2));

new Promise((resolve) =>{
    console.log(3);
    resolve();
}).then(()=> console.log(4));

setTimeout(()=> console.log(5));