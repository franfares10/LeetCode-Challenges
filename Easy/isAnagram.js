var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    else{
        let dic = {}

        for(let i = 0; i<s.length; i++){
            if(dic[s.charAt(i)]){
                dic[s.charAt(i)]+=1;
            }
            else{
                dic[s.charAt(i)] = 1;
            }
        }
        for(let j = 0; j<t.length; j++){
            if(dic[t.charAt(j)]){
                dic[t.charAt(j)]-=1;
            }
            else{
                return false;
            }
        }
        let values = Object.values(dic);
        for(let k = 0; k<values.length; k++){
            if(values[k] != 0){
                return false;
            }
        }
        return true;
    }
};
