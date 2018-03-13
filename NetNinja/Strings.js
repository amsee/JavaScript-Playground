// todo: JS-24 --- STRINGS

var myString = 'I\'m a "fun" string'; //? \ ESCAPE character within a string

console.log(myString.length); //? Property of a string
console.log(myString.toUpperCase()); 
console.log(myString.toLowerCase()); 
console.log(myString.indexOf("string")); // <<< 12
console.log(myString.indexOf("ninja")); // <<< -

if (myString.indexOf("ninja") === -1)
{
    console.log("the word ninja is not in the string");
} else{
    console.log("the word ninja starts at position" + 
myString.indexOf("ninja"));
}


var string1 = "abc";
var string2 = "ABC";

console.log(string1 === string2); //? <<< false because case sensitive
console.log(string1.toLowerCase() === (string2.toLowerCase());


var string1 = "abc";
var string2 = "bcd";

console.log(string1 < string2) //? <<< true because "a" is less than "b" 


var string1 = "abc";
var string2 = "Bcd";

console.log(string1 < string2) //? <<< false because "a" is greater than "A"

