// const fs = require('fs');

// fs.readFile('some_text.file', 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log(data);
// });

//? with then

const fs = require('fs/promises');

// fs.readFile('some_text.file', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

//? Modern syntax

async function readFile() {
    const data = await fs.readFile('some_text.file', 'utf8');
    console.log(data);
}

readFile();