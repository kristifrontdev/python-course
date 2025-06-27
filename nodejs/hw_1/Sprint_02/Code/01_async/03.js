let a = 5;
a = a + 5;

console.log(a);

let b;

new Promise((resolve) =>{
    console.log(3);
    resolve();
}).then(()=> console.log(4))
    .then(()=> console.log(5));

let c = 33;

console.log(a, b, c);