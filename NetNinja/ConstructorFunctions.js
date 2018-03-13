// todo: JS-30  --- CONSTRUCTOR FUNCTIONS

var myCar2 = {
    maxSpeed: 70;
    driver: "Net Ninja",
    drive: function(speed, time){
        console.log(speed * time)
    };
    test: function(){
        console.log(this) //? refers to myCar2
    }
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};

// * constructor functions create a new string function
// * var myArray = new Array();
// * var myString = new String(); 
// * var myCar = new Car(); 

var Car = function(maxSpeed, driver){
    // * use this keyword to represenet the object
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.driver = function(speed, time){
        console.log(speed * time)
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Harry Potter");
var myCar4 = new Car(90, "James Bond");

myCar.drive(30,5);
myCar3.logDriver();
