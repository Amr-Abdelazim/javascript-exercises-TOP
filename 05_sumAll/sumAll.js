const sumAll = function (l, r) {
  if (!Number.isInteger(l) || !Number.isInteger(r) || l < 0 || r < 0)
    return "ERROR";
  if (l > r) {
    l = l ^ r;
    r = l ^ r;
    l = l ^ r;
  }
  return (r * (r + 1)) / 2 - (l * (l - 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
