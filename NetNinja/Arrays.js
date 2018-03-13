// todo: JS-26 --- ARRAYS
// * array is a single variable that can hold multiple values and other variables
// * []


> var myArray = [] //? i want to create an empty array
< undefined
> myArray[0] = 25
< 25
> myArray[0]
< 25
> myArray[1] = 35
< 35
myArray[2] = true
< true
> myArray[3] = "hello"
< "hello"
> myArray
< [25, 35, true, "hello"]
> console.log(myArray);
< [25, 35, true, "hello"]
< undefined
> myArray[2] = false
< false
> myArray 
< [25, 35, false, "hello"]
> var myArray2 = [10,20,"hi",false];
> undefined
> myArray2
< [10, 20, "hi", false]
> var myArray3 = new Array()
> undefined
> myArray2.length
< 4
> myArray.sort()
< [10, 20, false, "hi"] //? sorted INT, BOOL, STRING
> myArray.reverse()
< ["hi", false, 20, 10]
