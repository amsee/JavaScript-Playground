// todo: JS-20 --- FUNCTIONS

function getAverage (a,b,c,d,e,f)
{
    var average = (a + b + c + d + e + f) / 2; //? (7 + 12) / 2 = 9.5
    console.log(average);
}

getAverage(7,12); //? when passing in additional numbers, end number will be ignored
alert("hello");

var myResult = getAverage(7,8,9,10,11,12);
console.log("the average is " + myResult);