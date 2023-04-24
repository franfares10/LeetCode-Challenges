function charCount(word, max) {
    for (let i = 0; i < word.length; i++) {
      let count = 0;
      for (let j = 0; j < word.length; j++) {
        if (word.charAt(i) == word.charAt(j)) {
          count += 1;
        }
      }
      if (count > max) {
        return false;
      }
    }
    return true;
  }