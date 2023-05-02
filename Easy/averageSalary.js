/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

 

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
*/

var average = function(salary) {
    salary.sort((a, b) => a-b);
    const toAvgArray = salary.slice(1,salary.length-1);
    const res = toAvgArray.reduce((a, b) => a + b, 0) / toAvgArray.length;
    
    return res;
};
