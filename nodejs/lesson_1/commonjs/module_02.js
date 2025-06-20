const calculate = (a, b) => {
  return a + b;
};

module.exports = {
  "+": calculate,
  "-": (a, b) => {
    return a - b;
  },
};
