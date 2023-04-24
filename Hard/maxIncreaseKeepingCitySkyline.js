var maxIncreaseKeepingSkyline = function(grid) {
    
    let maxVertical = [];
    let maxHorizontal = [];
    let increment = 0;
    for(let i = 0; i<grid.length; i++){
        let partialMaxH = 0;
        let partialMaxV = 0;
        for(let j = 0; j<grid[i].length; j++){
            if(grid[i][j] > partialMaxH){
                partialMaxH = grid[i][j];
            }
            if(grid[j][i] > partialMaxV){
                partialMaxV = grid[j][i];
            }
        }
        maxHorizontal.push(partialMaxH);
        maxVertical.push(partialMaxV);
    }

    for(let i2 = 0; i2<grid.length;i2++){
        for(let j2 = 0; j2<grid[i2].length; j2++){
            if(grid[i2][j2] != maxVertical[j2] && grid[i2][j2] != maxHorizontal[i2]){
                if(maxVertical[j2]>maxHorizontal[i2]){
                    increment+=(maxHorizontal[i2]-grid[i2][j2]);
                }
                else{
                    increment+=(maxVertical[j2]-grid[i2][j2]);
                }
            }
        }
    }
    return increment;
};