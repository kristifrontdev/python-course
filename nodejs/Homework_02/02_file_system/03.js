// Task 03

// Створіть анонімний модуль у цьому файлі, який приймає назву файлу та повертає його розмір. Якщо файл не існує — повертає 0.

// Приклад аргумента 'test_folder/one.txt'

const fs = require("fs/promises");

module.exports = async (fileName) => {
  try {
    const res = await fs.stat(fileName);
    return res.size;
  } catch (err) {
    return 0;
  }
};
