const canConstruct = function (ransomNote, magazine) {
    const letters = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const character = magazine.charAt(i);
        if (!letters[character]) {
            letters[character] = 1;
        } else {
            letters[character] += 1;
        }
    }
    for (let j = 0; j < ransomNote.length; j++) {
        const character = ransomNote.charAt(j);
        if (!letters[character] || letters[character] === 0) {
            return false;
        } else {
            letters[character] -= 1;
        }
    }

    return true;
};

console.log(canConstruct('aa','aab'))