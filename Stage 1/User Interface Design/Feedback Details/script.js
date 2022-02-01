var Feedback=[];
function addFeedback(){
    var string=document.getElementById("feedback").value;
    Feedback.push(string);
    document.getElementById("feedback").value = "";
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").innerHTML = "<h2>Feedback Details</h2><p>Successfully Added Feedback Details!</p>";
}
 
function displayFeedback(){
    document.getElementById("result").innerHTML="";
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").innerHTML += "<h2>" + "Feedback Details " + "</h2>";
     for(var i=0; i<Feedback.length; i++){
         document.getElementById("result").innerHTML += "<p>Feedback "+ eval(i+1) +"</p><p>"+Feedback[i]+"</p>";
    }
}
