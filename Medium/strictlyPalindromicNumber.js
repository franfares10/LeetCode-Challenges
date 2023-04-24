var isStrictlyPalindromic = function(n) {
    let flag = true;

    for(let i = 2; i<37;i++){
         let baseN = n.toString(i);
         let reverseN = baseN.split("").reverse().join("");
         if(baseN!=reverseN){
             flag = false;
         }
    }
    return flag;
};