var plusOne = function(digits) {
  
    let lastIndex = digits.length -1;
    if(digits[lastIndex] != 9){
        digits[lastIndex] += 1;
        return digits;
    }
    else{
        for(let i = lastIndex; i >= 0; i--){
            if(i != 0 && digits[i-1] != 9){
                digits[i] = 0;
                digits[i-1] += 1;
                return digits;
            }
            if(i!=0 && digits[i-1] == 9){
                digits[i] = 0;
            }
            if(i==0 && digits[i] == 9){
                digits[i] = 0;
                digits.unshift(1);
                return digits;
            }
        }
    }
    
};