function modifyString(str)
{
    return str.replace(/ /g, '').toLowerCase();
}

function uniqueCharacters(str)
{
    var trimmedStr = modifyString(str)
    var uniq = ''
    for(var char of trimmedStr){
        
        if(!uniq.includes(char)){
            uniq += char;
        }
    }
    return uniq;
}  

console.log(uniqueCharacters("Welcome to the Javascript course"))

