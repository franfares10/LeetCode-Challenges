var leftRigthDifference = function(nums) {
    let result = [];

    for(let i = 0; i<nums.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        if(i == 0){
            for(let j = i+1;j<nums.length;j++){
                rightSum+=nums[j];
            }
        }
        if(i== nums.length -1){
            for(let j = i-1;j>=0;j--){
                leftSum+=nums[j];
            }
        }
        if(i>0 && i<nums.length-1){
            for(let j = i+1;j<nums.length;j++){
                rightSum+=nums[j];
            }
            for(let h = i-1;h>=0;h--){
                leftSum+=nums[h];
            }
        }
        result.push(Math.abs(leftSum-rightSum));
    }
    return result;
};