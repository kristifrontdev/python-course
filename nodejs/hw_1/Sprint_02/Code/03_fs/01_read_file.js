const fs = require('fs');

fs.readFile('some_text.file', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data);
});