function wordPlay(number){
    //fill the code
    var result = '';
    if(number > 50){
        return "Range is High";
    }
    else if(number < 1){
        return "Not Valid";
    }
    else{
        for(var i=1; i<=number; i++){
            if(i % 3 == 0 && i % 5 == 0){
                result += " " + "Jump";
            }
            else if(i % 3 == 0){
                result += " " + "Tap";
            }
            else if(i % 5 == 0){
                result += " " + "Clap"
            }
            else{
                result += " " + i 
            }
        }
    }
    
    return result
}

console.log(wordPlay(16));
