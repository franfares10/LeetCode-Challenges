/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
*/
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;
    for(let i = 0; i<heights.length; i++){
        console.log(stack)
        //console.log(maxArea)
        if(stack.length == 0){
            stack.push([i,heights[i]]);
        }
        else{
            if(heights[i] < stack[stack.length-1][1]){
                let index = i;
                while(stack.length > 0 && heights[i] < stack[stack.length-1][1]){
                    let higherRectangle = stack.pop();
                    index = higherRectangle[0];
                    let partialArea = (i-higherRectangle[0]) * higherRectangle[1];
                    if(maxArea < partialArea){
                        maxArea = partialArea;
                    }
                }
                stack.push([index,heights[i]]);
            }
            if(heights[i] > stack[stack.length-1][1]){
                stack.push([i,heights[i]]);
            }
        }
    }
    if(stack.length != 0){
        for( let j = 0; j<stack.length; j++){
            let partialArea = (heights.length - stack[j][0]) * stack[j][1];
            console.log('PARTIAL AREA:',partialArea)
            if(partialArea > maxArea){
                maxArea = partialArea;
            }
        }
    }
    console.log(stack)
    return maxArea;
};

console.log(largestRectangleArea([2,1,2]))