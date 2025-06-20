const fs = require('fs');

fs.stat('log2.txt', (err, data)=> {
    if (err) throw err;
    // console.log(data);
});

try {
    const stats = fs.statSync('log2.txt');
    console.log(stats);
}
catch (err) {
    console.log(err);
}