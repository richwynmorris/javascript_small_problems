/*
"Write a function called doubler that doubles every value in an array".
// 


// Questions
// What should I return? => Happy Path - return an array with each element doubled.
// What datatyped will exist in the array ? => Any 
// What do you mean doubled? => When a number, return the number * 2
                             => When its a string => 'hello' => 'hellohello'
//                           => an array? [1,2,3] => [1,2,3] ,[1,2,3] 
//                           => object? {1: '1', 2: '2'} => {1: '1', 2: '2'}, {1: '1', 2: '2'}
//                           => null ? => null => null, null
//                           => boolean ? true => true, true
// Will the array contain non digit numbers - NaN, Infinity, -Infinity => just left alone.
// What if the array is empty ? => return an empty array.
// What should I do if an array object isn't given ? => string => string, split into an array => treat as doubler
                                                     => number => number, split into an array => treat as doubler
                                                     => object => take values of the object and treat as doubler
                                                     => null => 'Invalid input' 
                                                     => booleans = 'Invalid input'
                                                     => non digit number NaN, Infinity etc => 'Invalid input'
                                                     
// 
*/


// INPUT:
// Happy Path - array
// Could be anything!
// OUTPUT - see above.


// ALGORITHM:
// Happy Path
// IDENTIFY the datatype of the parameter's value.
// IF it's an array isArray
//      assign the functions argument to the array.
// ELSE IF its a string
//     SPLIT the string into an array. Assign the function's argument.
// ELSE IF its a numnber
//     STRINGIFY the number
//     SPLIT the number into digits
//     MAP the digits to their values 
//     ASSIGN the the function's argument.
// ELSE IF an object
//     GET the values of the object aand assign to the functions argument
// ELSE 
//    RETURN 'Invalid input'

// DECALRE a new array called result
// ITERATE over each element in the array
// IDENTIFY the type of element
// PUSH the result of the doubler for that datatype to result.
// RETURN the result



function doubler(dataType) {
  if (Array.isArray(dataType)){
    dataType = dataType
  } else if (typeof dataType === 'string') {
    dataType = dataType.split('');
  } else if (typeof dataType === 'number' && !Number.isNaN(dataType)) {
    dataType = String(dataType).split('').map(digit => Number(digit));
  } else if (typeof dataType === 'object' && dataType !== null) {
    dataType = Object.values(dataType)
  } else {
    return 'Invalid input'
  }
  
  let result = []
  
  dataType.forEach(element => {
    if (typeof element === 'string') {
      result.push(element.repeat(2))
    } else if (typeof element === 'number') {
      result.push(element * 2)
    } else if (typeof element === 'object' || element === true || element === false || element === null) {
      result.push(element)
      result.push(element)
    } else {
      result.push(element)
    }
  })
  
  return result
  
}

// //tests Happy Path
// console.log(doubler([1, '2', [1,2,3], {1: '1', 2: '2'}, null, true, NaN ]))
// // [2, '22', [1,2,3], [1,2,3], {1: '1', 2: '2'}, {1: '1', 2: '2'}, null, null, true, true, NaN ]

// console.log(doubler([])) // => []

// console.log(doubler('hello')) // => ['hh', 'ee', 'll', 'll' 'oo']

// console.log(doubler(123)) // => [2, 4, 6]

// console.log(doubler({1: '1', 2: '2'})) // => ['11', '22']

// console.log(doubler(null)) // => 'Invalid input'

// console.log(doubler(true)) // => 'Invalid input'

// console.log(doubler(NaN)) // => 'Invalid input' 


// console.log(doubler([NaN, Infinity, -Infinity]));   // [NaN, Infinity, -Infinity]
// console.log(doubler("567hi"))                       // ["55", "66", "77", "hh", "ii"]
// console.log(doubler([5, 6, 7]))                     // [10, 12, 14]
// console.log(doubler(['a', 'b', 'c']));              // ['aa', 'bb', 'cc']
// console.log(doubler(NaN))                           // "Invalid Input"
// console.log(doubler([]));                           // []
// console.log(doubler(""));                           // []
// console.log(doubler({}));                           // []
// console.log(doubler("ABC"));                        // ["AA", "BB", "CC"] 
// console.log(doubler(123));                          // [2, 4, 6]
// console.log(doubler(null));                         // "Invalid input"
// console.log(doubler(undefined));                    // "Invalid input"
// console.log(doubler(true));                         // "Invalid input"
// console.log(doubler(doubler));                      // "Invalid input"
// console.log(doubler(["a", "b", 5]));                // ["aa", "bb", 10]
// console.log(doubler(["a", true, null]));            // ["aa", true, true, null, null]
// console.log(doubler([[1, 2], 3, 4]));               // [[1, 2], [1, 2], 6, 8]
// console.log(doubler([{a: 5}, "hello"]));      // [{a: 5}, {a: 5}, "hellohello"]
// console.log(doubler());                             // "Invalid input"
// console.log(doubler(0));                            // [0]
// console.log(doubler(50));                           // [10, 0]
// console.log(doubler({ a: 'A', b: [] }));            // ["AA", [], []]
// console.log(doubler('NaN'))                         // ["NN', 'aa', 'NN']
