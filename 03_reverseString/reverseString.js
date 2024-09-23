const reverseString = function (s) {
  // The easy way : return s.split("").reverse().join("");
  // The hard way :
  let a = s.split("");
  let n = s.length;
  for (let i = 0; i < n / 2; i++) {
    [a[i], a[n - i - 1]] = [a[n - i - 1], a[i]];
  }
  return a.join("");
};

// Do not edit below this line
module.exports = reverseString;
