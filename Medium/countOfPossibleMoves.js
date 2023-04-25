var executeInstructions = function(n, startPos, s) {
  let answer = [];
  let v = startPos[0];
  let h = startPos[1];
  for(let i = 0; i<s.length;i++){
      let count = 0;

      for(let j = i; j<s.length; j++){
          if(s.charAt(j) == 'R'){
            if(startPos[1] == n-1){
              break;
            }
            else{
              startPos[1] +=1;
              count+=1;
            }
          }
          if(s.charAt(j) == 'L'){
            if(startPos[1] == 0){
              break;
            }
            else{
              startPos[1] -=1;
              count+=1;
            }
          }
          if(s.charAt(j) == 'U'){
            if(startPos[0] == 0){
              break;
            }
            else{
              startPos[0] -=1;
              count+=1;
            }
          }
          if(s.charAt(j) == 'D'){
            if(startPos[0] == n-1){
              break;
            }
            else{
              startPos[0] +=1;
              count+=1;
            }
          }
      }
      answer.push(count);
      startPos[0] = v;
      startPos[1] = h;
  }
  return answer;
};