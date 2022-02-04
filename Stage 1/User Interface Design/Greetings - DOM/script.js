var sname = document.getElementsByName('sname');
var course = document.getElementsByName('course');

function display(){
    const snameValue = sname[0].value;
    const courseValue = course[0].value;
    
    if(snameValue !== ""){
        document.getElementById('greet').innerHTML = "Hi, "+snameValue+". You have successfully registered for the "+courseValue+" course.";
    }
    else{
        document.getElementById('greet').innerHTML = "Name cannot be empty";
    }
}
