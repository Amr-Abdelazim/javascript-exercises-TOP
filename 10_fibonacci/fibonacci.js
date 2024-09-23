const fibonacci = function (x) {
  if (!Number.isInteger(x))
    for (let i = 0; i < x.length; i++)
      if (!(x[i] >= "0" && x[i] <= "9")) return "ERROR";
  x = parseInt(x);
  if (x < 0) return "OOPS";
  if (x === 0) return 0;
  if (x === 1) return 1;
  x--;
  if (x === 1) return 1;
  let l = 1,
    r = 1;
  while (--x) {
    let cur = l + r;
    if (x === 1) return cur;
    l = r;
    r = cur;
  }
};

// Do not edit below this line
module.exports = fibonacci;
