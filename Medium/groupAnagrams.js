/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

var groupAnagrams = function(strs) {
    let dic = {};
    for(let i = 0; i<strs.length; i++){
        let s = strs[i].split('').sort().join('')
        if(!dic[s]){
            dic[s] = [];
            dic[s].push(strs[i]);
        }
        else{
            dic[s].push(strs[i]);
        }
    }
    return Object.values(dic);
};
