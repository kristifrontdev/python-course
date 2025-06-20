// Task 04

// Створіть анонімний модуль, який приймає назву теки та повертає її вміст у форматі масиву з об'єктами. Приклад масиву наведено нижче. Якщо теки не існує — повертає false. Якщо тека порожня — повертає порожній масив.

// Приклад об'єкту
// [
//     {name : "one", ext : "txt"},
//     {name : "doc", ext  : "dat"}
// ]

// Приклад аргумента 'test_folder'

const fs = require("fs/promises");

module.exports = async (folderPath) => {
  try {
    const res = await fs.readdir(folderPath, { withFileTypes: true });
    return res.map((item) => {
      const name = item.name.split(".")[0];
      const ext = item.name.split(".")[1];
      return {
        name,
        ext,
      };
    });
  } catch (err) {
    return false;
  }
};
