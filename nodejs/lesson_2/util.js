const util = require("util");

const obj = {
  name: "John",
  age: 30,
  city: "New York",
  test: {
    one: 1,
    two: 2,
    nested: {
      three: 3,
      four: 4,
    },
  },
};

console.log(util.inspect(obj, { depth: 1 }));
