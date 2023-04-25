var romanToInt = function(s) {
    let sum = 0;
    for (let i = 0;i<s.length;i++){
        if(s.charAt(i) == 'I'){
            if(s.charAt(i+1) == 'V' || s.charAt(i+1) == 'X'){
                sum-=1;
            }
            else{
                sum+=1;
            }
        }
        if(s.charAt(i) == 'V'){
            sum+=5;
        }
        if(s.charAt(i) == 'X'){
            if(s.charAt(i+1) == 'L' || s.charAt(i+1) == 'C'){
                sum-=10;
            }
            else{
                sum+=10;
            }
        }
        if(s.charAt(i) == 'L'){
            sum+=50;
        }
        if(s.charAt(i) == 'C'){
            if(s.charAt(i+1) == 'D' || s.charAt(i+1) == 'M'){
                sum-=100;
            }
            else{
                sum+=100;
            }
        }
        if(s.charAt(i) == 'D'){
            sum+=500;
        }
        if(s.charAt(i) == 'M'){
            sum+=1000;
        }
    }
    return sum;
};