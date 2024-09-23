const findTheOldest = function (arr) {
  let ans = arr[0];

  for (cur of arr) {
    if (cur.yearOfDeath === undefined) {
      if (ans.yearOfBirth > cur.yearOfBirth) {
        ans = cur;
      }
      continue;
    }
    if (ans.yearOfDeath === undefined) {
      if (ans.yearOfBirth > cur.yearOfBirth) {
        ans = cur;
      }
      continue;
    }
    let age = cur.yearOfDeath - cur.yearOfBirth;
    if (age > ans.yearOfDeath - ans.yearOfBirth) {
      ans = cur;
    }
  }
  return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
