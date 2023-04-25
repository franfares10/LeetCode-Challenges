var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for(let i = 0; i<sentences.length; i++){
        let sentence = sentences[i].split(" ");
        if(sentence.length>maxWords){
            maxWords = sentence.length;
        }
    }
    return maxWords;
};