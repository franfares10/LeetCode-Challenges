/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/
const findSolutions = (open,close,n,stack,res) => {
    if(open == n && close == n){
        res.push(stack.join(''));
        return;
    }
    if(open < n){
        stack.push('(');
        findSolutions(open+1,close,n,stack,res);
        stack.pop();
    }
    if(close < open){
        stack.push(')');
        findSolutions(open,close+1,n,stack,res);
        stack.pop();
    }
}

var generateParenthesis = function(n) {
    let open = 0;
    let close = 0;
    let stack = [];
    let res = []
    findSolutions(open,close,n,stack,res)
    return res;
};

