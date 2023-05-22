/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
*/

var isValid = function(s) {
 let stack = [];
 for(let i = 0; i<s.length; i++){
    let character = s.charAt(i);
    if(character == '(' || character == '[' || character == '{'){
        stack.push(character);
    }
    else if(character == ')'){
        if(stack[stack.length-1] == '('){
            stack.pop();
        }else{
            return false;
        }
    }
    else if(character == ']'){
        if(stack[stack.length-1] == '['){
            stack.pop();
        }else{
            return false;
        }
    }
    else if(character == '}'){
        if(stack[stack.length-1] == '{'){
            stack.pop();
        }else{
            return false;
        }
    }
 }
 if(stack.length == 0){
    return true;
 }
 return false;

};

console.log(isValid("(4*(5+5))[]{}"))