const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) ans += arr[i];
  return ans;
};

const multiply = function (arr) {
  let ans = 1;
  for (let i = 0; i < arr.length; i++) ans *= arr[i];
  return ans;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let ans = 1;
  for (let i = 1; i <= x; i++) ans *= i;
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
