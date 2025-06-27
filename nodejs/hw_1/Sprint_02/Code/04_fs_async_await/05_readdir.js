const fs = require('fs/promises');

async function listFiles() {
  try {
    const files = await fs.readdir('.');
    console.log('files:');
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}

listFiles();
