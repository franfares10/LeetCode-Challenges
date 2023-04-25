const minPathSum = function(grid) {

    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[i].length; j++){
            if(i==0 && j>0){
                grid[i][j]+=grid[i][j-1];
            }
            if(j==0 && i>0){
                grid[i][j]+=grid[i-1][j];
            }
            if(i>0 && j>0){
                if(grid[i-1][j]>=grid[i][j-1]){
                    grid[i][j]+=grid[i][j-1];
                }
                else{
                    grid[i][j]+=grid[i-1][j];
                }
            }
            if(i==grid.length-1 && j == grid[i].length-1){
              return grid[i][j];
            }
        }
    }
  };