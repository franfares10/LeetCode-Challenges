/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/


var searchMatrix = function(matrix, target) {
   let rows = matrix.length;
   let cols = matrix[0].length;
   let topRow = 0;
   let bottomRow = rows - 1;

   while(topRow <= bottomRow){
      let row = Math.trunc((topRow + bottomRow) / 2);
      if(target > matrix[row][cols-1]){
         topRow = row + 1;
      }
      else if(target < matrix[row][0]){
         bottomRow = row - 1;
      }
      else{
         break;
      }
   }

   if(topRow > bottomRow){
      return false;
   }
   let row = Math.trunc((topRow + bottomRow) / 2);
   let left = 0;
   let right = cols - 1;

   while(left <= right){
      let middle = Math.trunc((left + right) / 2);

      if(target > matrix[row][middle]){
         left = middle + 1;
      }
      else if(target < matrix[row][middle]){
         right = middle - 1;
      }
      else{
         return true;
      }
   }

   return false;
 
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],6))