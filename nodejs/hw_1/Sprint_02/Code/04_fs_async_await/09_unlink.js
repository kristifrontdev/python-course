const fs = require('fs/promises');

async function deleteFile() {
  try {
    await fs.unlink('new_file.txt');
    console.log('del');
  } catch (err) {
    console.error(err);
  }
}

deleteFile();
