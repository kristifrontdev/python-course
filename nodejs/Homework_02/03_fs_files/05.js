// Task 05

// Створіть анонімний модуль у цьому файлі, який приймає аргументи — вихідний файл і кінцевий файл. Модуль має зчитати вміст вихідного файлу (текст) та записати його у кінцевий файл. Кодування — UTF-8, для запису використовуйте прапорець w. Якщо вхідного файла немає, то виконання завершується (return;)

const fs = require("fs/promises");

module.exports = async (sourceFile, targetFile) => {
  try {
    const data = await fs.readFile(sourceFile, { encoding: "utf8" });
    await fs.writeFile(targetFile, data, { encoding: "utf8", flag: "w" });
  } catch (err) {
    return;
  }
};
