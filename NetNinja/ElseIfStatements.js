// todo: JS-13 ELSE IF STATEMENTS 
// todo checks for multiple conditions
//* if True -> output to browser
//* if False -> falls back to else statements and outputs a different text to the browser 

var myAge = 29

if (myAge > 30)
{
    document.write("you are over 30!")
} else if (myAge > 20){
    
    document.write("you are over 20!")
} else if (myAge > 10){
    
    document.write("you are over 10!");
} else{

    document.write("you are not over 10!");
}

