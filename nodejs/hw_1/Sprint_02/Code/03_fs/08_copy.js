const fs = require('fs');

fs.copyFile('output.txt', 'new_file.txt', err => {
    if (err) throw err;
    console.log('file was copied');
});

try {
    fs.copyFileSync('output.txt', 'new_file_2.txt');
    console.log('file was copied');
} catch (err) {
    console.log(err);
}

//! copyFile overwrites the default file if it already exists.
// fs.copyFile('a.txt', 'b.txt', fs.constants.COPYFILE_EXCL, (err) => {
//     if (err) console.error();
//     else console.log();
// });