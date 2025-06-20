const fs = require('fs/promises');

const readFile = async () => {
    try {
        await fs.writeFile('output.txt', 'some text', 'utf8');
        console.log('file was created');
      } catch (err) {
        console.error(err);
      }
}

readFile();