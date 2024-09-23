const repeatString = function (s, x) {
  let ans = "";
  if (x < 0) {
    return "ERROR";
  }
  while (x--) {
    ans += s;
  }
  return ans;
};

// Do not edit below this line
module.exports = repeatString;
