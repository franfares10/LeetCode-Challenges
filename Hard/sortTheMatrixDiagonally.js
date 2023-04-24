var diagonalSort = function(matrix) {
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length;j++){
            let count1 = i+1;
            let count2 = j+1;
            while(count1<matrix.length && count2<matrix[count1].length){
              if(matrix[i][j] > matrix[count1][count2]){
                let aux = matrix[i][j];
                matrix[i][j] = matrix[count1][count2];
                matrix[count1][count2] = aux;
              }
              count1++;
              count2++;
            }
        }
    }
    return matrix;
  };