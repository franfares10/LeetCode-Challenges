var thirdMax = function(nums) {
    let nonDuplicatedNumbers = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length;j++){
            if(nums[i] < nums[j]){
                let aux = nums[i];
                nums[i] = nums[j];
                nums[j] = aux;
            }
        }
    }
    for(let h = 0; h<nums.length; h++){
        if(!nonDuplicatedNumbers.includes(nums[h])){
            nonDuplicatedNumbers.push(nums[h]);
        }
    }
    if(nonDuplicatedNumbers.length >=3){
        return nonDuplicatedNumbers[2];
    }
    else{
        return nonDuplicatedNumbers[0];
    }
};