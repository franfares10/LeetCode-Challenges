var countGoodRectangles = function(rectangles) {
    let maxSideCounter = 0;
    let maxSide = 0;
    for(let i = 0; i<rectangles.length; i++){
        if(rectangles[i][0] > rectangles[i][1]){
            if(rectangles[i][1] > maxSide){
                maxSide = rectangles[i][1];
            }
        }
        else{
            if(rectangles[i][0] > maxSide){
                 maxSide = rectangles[i][0];
            }
        }
    }
    for(let j = 0; j<rectangles.length;j++){
        if(rectangles[j][0] > rectangles[j][1]){
            if(rectangles[j][1] == maxSide){
                maxSideCounter+=1;
            }
        }
        else{
            if(rectangles[j][0] == maxSide){
                  maxSideCounter+=1;
            }
        }
    }
    return maxSideCounter
};