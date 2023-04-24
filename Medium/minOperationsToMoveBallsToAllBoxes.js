var minOperations = function(boxes) {
    let result = [];

    for(let i = 0; i<boxes.length; i++){
        let partialSum = 0;
        for(let j = 0; j<boxes.length;j++){
            if(j!=i && boxes[j] == '1'){
                let steps = j-i
                partialSum+=Math.abs(steps);
            }
        }
        result.push(partialSum);
    }
    return result;
};