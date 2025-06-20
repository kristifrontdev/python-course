const fs = require('fs/promises');

async function checkFileStats() {
  try {
    const stats = await fs.stat('log.txt');
    console.log(stats);
  } catch (err) {
    console.error( err);
  }
}

checkFileStats();