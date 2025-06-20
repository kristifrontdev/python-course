// Task 02

// Створіть анонімний модуль у цьому файлі, який приймає аргумент — назву файлу. Модуль зчитує вміст файлу та повертає суму чисел, що в ньому містяться.

// Приклад аргумента: 'num.dat'
// Приклад поверненного результата: 25

const fs = require("fs/promises");

module.exports = async (fileName) => {
  const data = await fs.readFile(fileName, { encoding: "utf8" });
  const nums = data.split(/\r?\n/).map((x) => Number(x));
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum;
};
