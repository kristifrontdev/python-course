// Task 02

// Створіть анонімний модуль у цьому файлі, який приймає повний шлях до теки та повертає true або false залежно від того, чи існує вказана тека.

const fs = require("fs/promises");

module.exports = async (pathName) => {
  try {
    await fs.access(pathName);
    return true;
  } catch (err) {
    return false;
  }
};
