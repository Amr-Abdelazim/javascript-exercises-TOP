const convertToCelsius = function (x) {
  let ans = ((x - 32) * 5) / 9;
  if (ans === 0) return 0;
  return Number(ans.toFixed(1));
};

const convertToFahrenheit = function (x) {
  let ans = (x * 9) / 5 + 32;
  if (ans === 0) return 0;
  return Number(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
