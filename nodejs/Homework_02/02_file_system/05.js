// Task 05

// Створіть анонімний модуль у цьому файлі, який приймає назву теки та повертає кількість файлів у ній (теки не враховуємо).

// Приклад аргумента 'test_folder'

const fs = require("fs/promises");

const isFile = async (filePath) => {
  try {
    const stats = await fs.stat(filePath);
    return stats.isFile();
  } catch (err) {
    return false;
  }
};

module.exports = async (folderPath) => {
  try {
    const res = await fs.readdir(folderPath);
    const filtered = await Promise.all(res.map((x) => isFile(`${folderPath}/${x}`)));
    return filtered.filter((x) => x).length;
  } catch (err) {
    console.log(err);
    return false;
  }
};
