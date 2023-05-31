/*
875. Koko Eating Bananas
Medium
7.7K
367
Companies
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
*/

var minEatingSpeed = function(piles, h) {
    let maxPile = Math.max(...piles);
    let eatRate = 1;
    let res = maxPile;
    while(eatRate <= maxPile){
        let middle = Math.trunc((maxPile + eatRate) / 2);
        let kTries = 0;
        for(let i = 0; i < piles.length; i++){
            kTries+=Math.ceil(piles[i] / middle);
        }
        if(kTries <= h){
            res = Math.min(res,middle);
            maxPile = middle -1;
        }
        else{
            eatRate = middle + 1;
        }
    }
    return res;
};