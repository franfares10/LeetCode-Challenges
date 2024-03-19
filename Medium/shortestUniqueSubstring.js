const shortestUniqueSubstring = (S) => {
  let substring_count = new Map();
  let min = Infinity;
  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j <= S.length; j++) {
      const substring = S.substring(i, j);
      if (!substring_count.has(substring)) {
        substring_count.set(substring, 1);
      } else {
        substring_count.set(substring, substring_count.get(substring) + 1);
      }
    }
  }

  substring_count.forEach((value, key) => {
    if (value === 1 && key.length < min) {
      min = key.length;
    }
  })

  return min
};

console.log(shortestUniqueSubstring('abaaba'))