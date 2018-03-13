// todo: JS-29 --- THIS keyword

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

var myCar3 = {
    maxSpeed: 70;
    driver: "Amy",
    drive: function(speed, time){
        console.log(speed * time)
    };
    test: function(){
        console.log(this) //? refers to myCar3
    }
};

myCar2.logDriver();
myCar2.test();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

