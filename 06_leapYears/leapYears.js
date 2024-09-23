const leapYears = function (x) {
  if (x % 400 === 0) return true;
  if (x % 100 === 0) return false;
  if (x % 4 === 0) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
