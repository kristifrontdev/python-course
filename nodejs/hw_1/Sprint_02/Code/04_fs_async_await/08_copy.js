const fs = require('fs/promises');

async function copyFile() {
  try {
    await fs.copyFile('output.txt', 'new_file.txt');
    console.log('file was copied');
  } catch (err) {
    console.error(err);
  }
}

copyFile();
