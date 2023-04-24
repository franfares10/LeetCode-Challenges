function maxNumberOfCoinsYouCanGet(a, b) {
    return a - b;
  }
  var maxCoins = function(piles) {
    piles.sort(maxNumberOfCoinsYouCanGet).reverse();
    let second = 1;
    let sum = 0;
    for(let count = 0; count<piles.length/3;count++){
        sum+=piles[second];
        second+=2;
    }
    return sum;
  };
  