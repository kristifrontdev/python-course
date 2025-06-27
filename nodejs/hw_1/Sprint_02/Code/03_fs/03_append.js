const fs = require('fs');

fs.appendFile('log.txt', Date.now() + '\n', 'utf8', err => {
    if (err) throw err;
    console.log('file was created');
});