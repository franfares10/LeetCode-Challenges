/*
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*/

var maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) buy = prices[i];
        if (prices[i] - buy > profit) profit = prices[i] - buy;
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))