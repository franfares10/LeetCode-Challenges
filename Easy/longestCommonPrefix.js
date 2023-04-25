var longestCommonPrefix = function(strs) {
    let longestPrefix = "";
    const firstWord = strs[0];
    
    for(let letter = 0; letter<firstWord.length;letter++){
        let flag = true;
        for(let word = 0; word<strs.length;word++){
            if(strs[word].charAt(letter) != firstWord.charAt(letter)){
                flag = false;
            }
        }
        if(flag){
            longestPrefix+=firstWord.charAt(letter);
        }
        else {
            return longestPrefix;
        }   
    }
    return longestPrefix;
};