const fs = require('fs/promises');

async function ensureFolderExists() {
  try {
    await fs.access('new_folder'); 
    console.log('folder already exists');
  } catch {
    try {
      await fs.mkdir('new_folder');
      console.log('folder was created');
    } catch (err) {
      console.error( err);
    }
  }
}

ensureFolderExists();
