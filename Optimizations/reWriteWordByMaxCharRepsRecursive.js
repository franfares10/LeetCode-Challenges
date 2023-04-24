function reWriteWordByMaxCharRepsRecursive(word, partialWord, repsDict, index, max) {
    if (index == word.length) {
      return partialWord;
    } else {
      console.log(partialWord);
      if (
        Object.keys(repsDict).includes(word.charAt(index)) == false
      ) {
        repsDict[word.charAt(index)] = 1;
        console.log(repsDict);
        partialWord += word.charAt(index);
        return reWriteWordByMaxCharRepsRecursive(
          word,
          partialWord,
          repsDict,
          index + 1,
          max
        );
      } else {
        if (repsDict[word.charAt(index)] < max) {
          repsDict[word.charAt(index)] += 1;
          console.log(repsDict);
          partialWord += word.charAt(index);
          return reWriteWordByMaxCharRepsRecursive(
            word,
            partialWord,
            repsDict,
            index + 1,
            max
          );
        } else {
          return reWriteWordByMaxCharRepsRecursive(
            word,
            partialWord,
            repsDict,
            index + 1,
            max
          );
        }
      }
    }
  }
  