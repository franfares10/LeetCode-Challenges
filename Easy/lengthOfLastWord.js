var lengthOfLastWord = function(s) {
    const words = s.trim().split(' ');
    return words[words.length -1].length;
};

console.log(lengthOfLastWord("Hello World"))