function validateEmail(email) {
   //fill the code
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(email.match(emailRegex)){
        return "Valid email address!";
    }
    else{
        return "Invalid email address!";
    }
}
console.log(validateEmail('info123@example.com'));
console.log(validateEmail('abc-defmail.com'));
