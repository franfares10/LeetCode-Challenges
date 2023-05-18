var topKFrequent = function(nums, k) {
    let dic = {};
    let res = [];
    for(let i = 0; i<nums.length; i++){
        if(!dic[nums[i]]){
            dic[nums[i]] = 1
        }
        else{
            dic[nums[i]] += 1
        }
    }
    
    var items = Object.keys(dic).map(function(key) {
        return [key, dic[key]];
      });

    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    console.log(items)
    for(let i = 0; i<k; i++){
        res.push(parseInt(items[i][0]));
    }
    return res;
}

console.log(topKFrequent([-1,-1],1))