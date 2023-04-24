function reWriteWordByMaxCharReps(word, max) {
    let dict = {};
    let result = "";
  
    for (let i = 0; i < word.length; i++) {
      if (Object.keys(dict).includes(word.charAt(i)) == false) {
        dict[word.charAt(i)] = 1;
        result += word.charAt(i);
      } else {
        if (dict[word.charAt(i)] < max) {
          dict[word.charAt(i)] += 1;
          result += word.charAt(i);
        }
      }
    }
    return result;
  }