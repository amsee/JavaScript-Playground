// todo: JS-12 IF STATEMENTS 
// *************************
// todo IF you pay for your train ticket...
// you won't get a fine
// todo IF you otake a crap in public...
// you'll wind up in prison

// * ---ASSIGN--- variable to true
var youlikeMeat = true;

// * ---CHECK--- to see if expressione evaluates as true
if (youlikeMeat) //? this will evaluate as true
//  ? code block
{ 
// * ---DISPLAY--- out to user if statement is true
    document.write("Here is the meaty menu...");
}

// * PRINTS
var youlikeMeat = false;
if (7 > 5)
{
    document.write("this expression is true");
}

// * DOES NOT PRINT
if (7 < 5)
{
    document.write("this expression is true");
}

var youlikeMeat = false;
var myNum = 10;

if (myNum > 10) //! FALSE will not print out; 10 is not greater than 10.
{
    document.write("myNum is greatert than 10");
}

if (myNum > 9) //! TRUE will print; 10 is greater than 9.
{
    document.write("myNum is greater than 10");
}

if (myNum == 10) //! TRUE will print; 10 equates to 10.
{
    document.write("myNum is equal than 10");
// * if true, execute all above, if not: 
} else{
    document.write("myNum is not equal to 10");

}

var youlikeMeat = false;
var myNum = 10;

if (youlikeMeat)
{
    document.write("you like meat");
} else {
    document.write("you hate meat"); //! this is the output because we have initialized the variable to false
}