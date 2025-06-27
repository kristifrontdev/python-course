const readFile = require("./01.js");

readFile("test.file")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

const sum = require("./02.js");

sum("num.dat")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

const writeFile = require("./03.js");
writeFile("Kristi");

const writeFile2 = require("./04.js");
writeFile2(["My", "name", "is", "Kristina", "1"]);

const copyFile = require("./05.js");
copyFile("file_03.txt", "file_05.txt");
