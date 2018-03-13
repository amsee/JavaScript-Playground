// todo: JS-22 --- WORKING WITH NUMBERS

//? var myVariableName = 5; can use either int or float

var a = "5";
var b = 5;

// * concatenate string and integer
console.log(a + b) // "5" + 5 = 55 //! 55 is NaN (no longer a number)
console.log(typeof (a + b) ); // <<< string  

console.log(Math.round(7.8); // <<< 8  
console.log(Math.floor(7.8)); // <<< 7
console.log(Math.ceil(7.2)); // <<< 8
console.log(Math.max(7, 4, 9, 8)) // <<< 9
console.log(Math.PI); // <<< 3.14...