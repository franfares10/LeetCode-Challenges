function recursiveCharCount(word, index, max) {
  let character = word.charAt(index);
  let count = 0;

  if (index > word.length - 1) {
    return true;
  } else {
    for (let i = 0; i < word.length; i++) {
      console.log(`Index: ${character} I: ${word.charAt(i)}`);
      if (character === word.charAt(i)) {
        count += 1;
      }
    }
    console.log(`The character ${character} appears ${count} times`);
    if (count > max) {
      console.log("The character exceeded the max number of appearences");
      return false;
    } else {
      return recursiveCharCount(word, index + 1, max);
    }
  }
}