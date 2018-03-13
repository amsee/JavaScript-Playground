// todo: JS-31 - THE DATE OBJECT

var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);
// ? returns false because JavaScript looks at both of these as two seperate objects
// ! they are not indentical even though the values hold the

// * get the month of the date (0 - 11)
console.log(birthday.getMonth());

// * get the full year (YYYY)
console.log(birthday.getFullYear());

// * get the date of the month (1 - 31)
console.log(birthday.getDate());

// * get the day of the week (0 - 6)
console.log(birthday.getDay());

// * get the hour of the date (0 - 23)
console.log(birthday.getHours());

// * get the number of miliseconds isnce 1st Jan 1970
console.log(birthday.getTime());

if(birthday == birthday2){
    console.log("birthdays are equal"); 
} else{
    console.log("birthdays are not equal"); //? false; returns 2 seperate objects
}


if(birthday.getTime() == birthday2.getTime()){
    console.log("birthdays are equal"); // ? true; returns miliseconds and values are identical 
} else{
    console.log("birthdays are not equal"); 
}

var myDate = new Date();
console.log(myDate); //? Thu Mar 08 2018 14:18:39 GMT-0500 (EST)

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2545, 0, 31, 10, 30, 15);

console.log(myPasteDate);
console.log(myFutureDate);

