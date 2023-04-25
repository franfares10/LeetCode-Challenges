var moveZeroes = function(nums) {
    count = 0;
    while(count < nums.length){
        if(count > 0 && nums[count]!=0 && nums[count-1]==0){
            let aux = nums[count-1];
            nums[count-1] = nums[count];
            nums[count] = aux;
            count--;
        }
        else{
            count++;
        }
    }
    return nums;
};