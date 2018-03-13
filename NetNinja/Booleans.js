//todo: Booleans in JavaScript
//* True or False statements to evaluate certain circumstances.

var iLikeMeat = true //! this is a boolean
< undefined
iLikeMeat
< true
iLikeMeat = "true" //! this is a string
< "true"
iLikeMeat = false
< false
7 > 5 //? parsing operator > 
< true
7 < 5
< false 
7 = 7 
< //! ReferenceError: Invalid left-hand side in assignment(...) = Assignment Error
7 == 7
< true
7 == 5
< false
// * evaluate elements, values, numbers
0
< 0
Boolean(7 > 5)
< true
Boolean(6)
< true
Boolean(-5)
< true
Boolean(0) //? 0 is considered false within JavaScript
< false 
Boolean("hello") //? true; parameter contains string
< true 
Boolean("") //? false; empty parameter
< false