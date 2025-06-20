const fs = require('fs');

try {
    fs.writeFileSync('output.txt', 'some text', { flag: 'a+' }); //'a+' is append mode
    console.log("File written successfully");
} catch (err) {
    console.error(err);
}