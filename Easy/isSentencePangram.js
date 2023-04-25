var checkIfPangram = function(sentence) {
    let appearences = [];
    for(let i = 0; i<sentence.length; i++){
        if(!appearences.includes(sentence.charAt(i))){
            appearences.push(sentence.charAt(i));
        }
    }
    return appearences.length == 26;
};