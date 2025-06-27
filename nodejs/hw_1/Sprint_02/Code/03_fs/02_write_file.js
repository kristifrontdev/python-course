const fs = require('fs');

fs.writeFile('output.txt', 'some text', 'utf8', err => {
    if (err) throw err;
    console.log('file was created');
})