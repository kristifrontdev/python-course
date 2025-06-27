console.log(1);

setTimeout(()=> console.log(2));

new Promise((resolve) =>{
    console.log(3);
    resolve();
}).then(()=> {
    setTimeout(()=>console.log(4));
})
    .then(()=> console.log(5));

