var garbageCollection = function(garbage, travel) {
    let paperTruck = 0;
    let metalTruck = 0;
    let glassTruck = 0;
    let timeConsumed = 0;
    for(let i = 0; i<garbage.length; i++){
        timeConsumed+=garbage[i].length;
        if(i>0){
        let house = garbage[i].split('');
  
        if(house.includes('M')){
            if(i>metalTruck){
                for(let j = metalTruck; j<i;j++){
                    timeConsumed+=travel[j];
                    metalTruck++;
                }
            }
  
        }
        if(house.includes('G')){
            if(i>glassTruck){
                for(let j = glassTruck; j<i;j++){
                    timeConsumed+=travel[j];
                    glassTruck++;
                }
            }
        }
        if(house.includes('P')){
            if(i>paperTruck){
                for(let j = paperTruck; j<i;j++){
                    timeConsumed+=travel[j];
                    paperTruck++;
                }
            }
        }
      }
    }
    return timeConsumed;
  };