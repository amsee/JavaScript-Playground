// todo: JS-28 --- NEW OBJECT

var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
// * use dot notation by giving property
myCar.maxSpeed = 50;
myCar.driver = "Amy";
myCar.drive = function(){ console.log("now driving again");};

myCar.drive();

console.log(myCar.driver); //? <<< Amy

var myArray2 = [true, 15, "hi"]
var myCar2 = {maxSpeed: 50,
    driver: "NN",
    drive: function(speed, time){ 
        console.log(speed * time;
    }
};

consolelog(myCar2.maxSpeed);
myCar2.drive();

