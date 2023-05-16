var maxVowels = function (s, k) {
  let vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let max = 0;
  let count = 0;
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    while (index < k) {
      if (vowels[s.charAt(i+index)]) {
        count += 1;
      }
      index += 1;
    }
    if (count > max) {
      max = count;
    }
    index = 0;
    count = 0;
  }

  return max;
};
