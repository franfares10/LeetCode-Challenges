var recursiveSolution = function(nums,matrix,index){

    if(nums.length == 0){
      return matrix;
    }
    else{
      let repeatedNumbers = [];
      matrix.push([]);
      for(let i = 0; i<nums.length;i++){
  
        if(!matrix[index].includes(nums[i])){
            matrix[index].push(nums[i]);
        }
        else{
            repeatedNumbers.push(nums[i]);
        }
      }
      return recursiveSolution(repeatedNumbers,matrix,index+1);
    }
  }
  
  var findMatrix = function(nums) {
    let matrix = [];
    let result = recursiveSolution(nums,matrix,0);
    
    return result;
  };