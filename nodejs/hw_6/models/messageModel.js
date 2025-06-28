const data = require("../data.json");
const fs = require("fs");
const he = require("he");

module.exports = {
  add: (username, text, createdAt) => {
    data.push({
      username: he.escape(username),
      text: he.escape(text),
      createdAt,
    });
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return console.log("Error");
    });
  },
  getAll: data,
};
