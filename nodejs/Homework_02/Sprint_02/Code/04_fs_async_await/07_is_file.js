const fs = require('fs/promises');

async function checkFileOrFolder() {
  try {
    const stats = await fs.stat('log.txt');

    if (stats.isFile()) {
      console.log('file');
    } else if (stats.isDirectory()) {
      console.log('folder');
    } else {
      console.log('else');
    }
  } catch (err) {
    console.error(err);
  }
}

checkFileOrFolder();
