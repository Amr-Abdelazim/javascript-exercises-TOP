const palindromes = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
