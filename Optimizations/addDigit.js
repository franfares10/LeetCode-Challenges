/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
*/

const addDigits = function(n){

    if(n < 10){
        return n;
    }
    let sum = 0;
    let stNumber = n.toString();
    console.log(stNumber)
    for(let i = 0; i<stNumber.length;i++){
        sum+= parseInt(stNumber.charAt(i));
    }
    return addDigits(sum);
}

