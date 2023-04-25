var oddCells = function(m, n, indexes) {
    let matrix = [];
    let oddCount = 0;
    for(let i = 0;i<m;i++){
        matrix.push([]);
        for(let j = 0; j<n;j++){
            matrix[i].push(0);
        }
    }
    for(let h = 0; h<indexes.length; h++){
        for(let h1 = 0; h1<n;h1++){
            matrix[indexes[h][0]][h1]+=1;
        }
        for(let h2 = 0; h2<m; h2++){
            matrix[h2][indexes[h][1]]+=1;
        }
    }
    for(let c = 0; c<m;c++){
        for(let c1 = 0; c1<n; c1++){
            if(matrix[c][c1]%2 != 0){
                oddCount+=1;
            }
        }
    }
    return oddCount;
};