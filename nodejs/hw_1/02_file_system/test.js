const getAbsolutePath = require("./01.js");

console.log(getAbsolutePath("test_folder"));

const isFolderExists = require("./02.js");

isFolderExists(getAbsolutePath("test_folder")).then((res) => {
  console.log(res);
});

const getFileSize = require("./03.js");

getFileSize(getAbsolutePath("test_folder/one.txt")).then((res) => {
  console.log(res);
});

const getFolderContent = require("./04.js");

getFolderContent(getAbsolutePath("test_folder")).then((res) => {
  console.log(res);
});

const getFilesCount = require("./05.js");

getFilesCount(getAbsolutePath("test_folder")).then((res) => {
  console.log(res);
});
