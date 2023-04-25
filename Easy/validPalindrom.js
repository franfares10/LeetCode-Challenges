var isAlpha = function(ch){
    return /^[a-zA-Z0-9]$/i.test(ch);
  }
  
  var isPalindrome = function(s) {
      let palindrome = s.toLowerCase()
      let newPalindrome = ""
      let invertedPalindrome = ""
      for(let character=0;character<s.length;character++){
          if(isAlpha(palindrome.charAt(character))){
              newPalindrome+=palindrome.charAt(character);
              invertedPalindrome=palindrome.charAt(character)+invertedPalindrome;
          }
      }
      return newPalindrome == invertedPalindrome;
  };