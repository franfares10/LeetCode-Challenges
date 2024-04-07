const verifyNumber = (n, visited) => {
    if(visited.has(n)) {
        return false;
    } else {
        let sum = 0;
        let temp = n;
        while(temp > 0) {
            sum += Math.pow(temp % 10, 2);
            temp = Math.floor(temp / 10);
        }
        if(sum === 1) {
            return true;
        } else {
            return verifyNumber(sum, visited.add(n));
        }
    }
}

var isHappy = function(n) {
    return verifyNumber(n, new Set());
};

console.log(isHappy(2));