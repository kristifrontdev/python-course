// Task 01

// Створіть анонімний модуль у цьому файлі, який приймає аргумент — назву файлу. Модуль повертає вміст цього файлу.

// Приклад аргумента: 'test.file'

const fs = require("fs/promises");

module.exports = async (fileName) => {
  return await fs.readFile(fileName, { encoding: "utf8" });
};

// --------------------------------
// console.log("Hello");
// setImmediate(() => console.log(3));
// Promise.resolve().then(() => console.log(4));
// process.nextTick(() => console.log(5));
// 5, 4, 3, data file

// const data = fs.readFileSync("test.file", { encoding: "utf8" });
// console.log(data);
