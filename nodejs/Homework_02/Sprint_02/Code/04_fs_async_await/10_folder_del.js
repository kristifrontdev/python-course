const fs = require('fs/promises');

async function deleteFolder() {
  try {
    await fs.rm('new_folder', { recursive: true, force: true });
    console.log('del');
  } catch (err) {
    console.error('Ошибка при удалении папки:', err);
  }
}

deleteFolder();