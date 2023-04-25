var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = 0;
    let result = [];
    for(let i = 0; i<candies.length; i++){
        if(candies[i] > maxCandies){
            maxCandies = candies[i];
        }
    }
    for(let j = 0; j<candies.length; j++){
        if((candies[j]+extraCandies)>= maxCandies){
            result.push(true);
        }
        else{
            result.push(false);
        }
    }
    return result;
};