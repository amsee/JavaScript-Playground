// todo: JS-15 [LOGICAL OPERATORS]

var myAge = 17;
if (myAge >= 18 && myAge <=30){ //? AND operator
    document.write("You can come, you cool dude");
} else{
    document.write("You ain't coming!");
}

var myAge = 25;
if (myAge < 18 || myAge > 30){ //? OR operator || must be one or the either
    document.write("You ain't coming!");
} else{
    document.write("You can come, you cool dude");
}

var myAge = 26;
if (myAge < 18 || myAge > 30 || myAge === 25){ //? OR operator || must be one or the either
    document.write("You ain't coming!");
} else{
    document.write("You can come, you cool dude");
}