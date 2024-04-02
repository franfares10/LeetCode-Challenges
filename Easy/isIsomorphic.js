const isIsomorphic = function (s, t) {
    const replacements = {};
    const uniqueValues = new Set({})
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (!replacements[s.charAt(i)]) {
            if (uniqueValues.has(t.charAt(i))) return false;
            replacements[s.charAt(i)] = t.charAt(i);
            uniqueValues.add(t.charAt(i));
        } else {
            if (replacements[s.charAt(i)] !== t.charAt(i)) {
                return false;
            }
        }
    }
    return true;
};

console.log(isIsomorphic('title', 'paper'));