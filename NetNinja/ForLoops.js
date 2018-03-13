// todo: JS-17 --- [FOR LOOPS]
// *  3 components needed in loops
// * 1 - index variable | var age = 5
// * 2 - condition | (age < 10)
// * 3 - incrementer | age++; - without this, will be caught in an infinite loop
// * index | condition | incrementer

for (age = 1; age < 10; age++) { //* 1 or 0 is more logical to start for index variable
    console.log("Your age is less than 10");
}
document.write("You are now over 10");

var links = document.getElementsByTagName("a");
// * returns number of links on the page
for (i = 1; i <= links.length; i++) { //* 1 or 0 is a more logical initializer variable
    console.log("this is link number" + i); //? "this is link number 1, this is link number 2, etc."
}
document.write("all links now looped");
