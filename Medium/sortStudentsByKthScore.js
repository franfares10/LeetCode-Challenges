var sortTheStudents = function(score, k) {
    
    for(let i = 0; i<score.length; i++){
        for(let j = i+1; j<=score.length-1;j++){
            if(score[i][k] < score[j][k]){
                let aux = score[i];
                score[i] = score[j];
                score[j] = aux;
            }
        }
    }
    return score;
  };