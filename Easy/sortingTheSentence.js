var sortSentence = function(s) {
    let arrayOfWords = s.split(' ');
    let sentence = '';


    for(let i = 0; i<arrayOfWords.length;i++){
        for(let j = i+1; j<arrayOfWords.length; j++){
            if(arrayOfWords[i].charAt(arrayOfWords[i].length -1) > arrayOfWords[j].charAt(arrayOfWords[j].length -1)){
                let aux = arrayOfWords[i];
                arrayOfWords[i] = arrayOfWords[j];
                arrayOfWords[j] = aux;
            }
        }
    }
    for(let i = 0; i<arrayOfWords.length; i++){
        let current = arrayOfWords[i].substring(0,arrayOfWords[i].length -1);
        sentence+=current;
        if(i!=arrayOfWords.length-1){
            sentence+=' ';
        }
    }
    return sentence;
};