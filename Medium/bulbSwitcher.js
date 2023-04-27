/*
There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Return the number of bulbs that are on after n rounds.

Example:

Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.
*/
const bulbSwitch = function (n) {
  let count = n;
  let state = {};

  for (let round = 1; round <= n; round++) {
    for (let number = 1; number <= n; number++) {
      if (state[number]) {
        if ((number % round) == 0) {
          if (state[number.toString()] == "on") {
            state[number.toString()] = "off";
            count--;
          } else {
            state[number.toString()] = "on";
            count++;
          }
        }
        
      } else {
        state[number] = "on";
      }
    }
  }
  return count;
};



