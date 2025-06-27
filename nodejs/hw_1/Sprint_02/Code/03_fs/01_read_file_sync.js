const fs = require('fs');

const data = fs.readFileSync('some_text.file', { encoding: 'utf8', flag: 'r' });

console.log(data);