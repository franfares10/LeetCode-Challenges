const isSubsequence = function(s, t) {
    let stack = s.split('');
    for(let i = t.length - 1; i >= 0; i--) {
        if(t[i] === stack[stack.length - 1]) {
            stack.pop();
            if(stack.length === 0) return true;
        }
    }
    if(stack.length === 0) return true;
    return false;
};

isSubsequence('abc','ahbgdc')