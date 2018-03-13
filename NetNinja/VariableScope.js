// todo: JS-21 --- VARIABLE SCOPE


// * Global Variable (Top line of JS file)
//  * can call variable anywhere in the code
var foo = 20        //? Global Variable

function myFunction()
{
    // * local variable can only be used within the function
    // * can not be called outside of function
    var bar = 10    //? Local Variable
}

var average = 0; //! variable becomes Global Variable after declaring it outisde of the function.

function getAverage(a,b)
    // * declare variables inside the function
{
    average = (a + b) / 2; //! Local Variable within this functions. Go back to line 15.
    console.log(average);
    return average;
}
var myResult = getAverage(7,11); //! Global Variable with Global Scope 


function logResult()
{
    console.log("the average is " + myResult + " inside the function");
}
logResult();
