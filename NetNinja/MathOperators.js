// * The 5 Most Common Mathematical Operators
// * Assignment (=)
// * Arithmetic (+ | - | / | *)

> var myVar = 5 //? id0: 5
< undefined
> myVar
< 5 //! id0
> 5 + 5 
< 10
> myVar + 10 //? id0 + 10 (5 + 10)
< 15 
> myVar
< 5 
> myVar = myVar + 10 //? id0 + 10 (5 + 10)
< 15 //! id1
> myVar
< 15 
> 10 - 5
< 5
> myVar - 3 //? id1 - 3 (15 - 3)
< 12 
> myVar = myVar - 5 //? id1 - 5 (15 - 5)
< 10 //! id2
> myVar 
< 10
> 10 * 10
< 100
> 20 / 10
< 2
> myVar = myVar / 2 //? id2 / 2 (10 / 2)
< 5 //! id3
> myVar
< 5
> 5 + 5
< 10

> 5 + "hello"
< "5hello" //? concatenates the integer and string
> 100 + "hello"
< "100hello"

> "hello" + "david"
< "hellodavid"
> "hello" + " david" //? add space
< "hello david"

// * not valid
> 5 * "hello"
< NaN //! Not a Number

//! Can NOT divide a number by a string
//! Can NOT subtract a number by a string
//! Can NOT multiply a number by a string

//! Can ONLY add/concatenate number and strings OR strings + strings

//* sfdsf *// 
