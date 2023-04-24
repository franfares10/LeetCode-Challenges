var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let letters = [];
  let count = 0;
  if (s == " ") {
    return 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (!letters.includes(s.charAt(i))) {
      count++;
      letters.push(s.charAt(i));
    } else {
      if (count > max) {
        max = count;
      }
      let aux = [];
      for (let j = letters.indexOf(s.charAt(i)) + 1; j < letters.length; j++) {
        aux.push(letters[j]);
      }
      letters = aux;
      letters.push(s.charAt(i));
      count = letters.length;
    }
  }

  if (count > max) {
    max = count;
  }
  return max;
};
