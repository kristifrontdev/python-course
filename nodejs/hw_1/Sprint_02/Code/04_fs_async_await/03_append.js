const fs = require('fs/promises');

async function appendLog() {
  try {
    await fs.appendFile('log.txt', Date.now() + '\n', 'utf8');
    console.log('file was created');
  } catch (err) {
    console.error(err);
  }
}

appendLog();