 // * Taking each four digit number of an array in turn, return the number that you are on when all of the 
 // * digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".
 // */

// findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// // digits found:  517-  4-38  29-6  -0

// findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// // digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

// findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// // digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// // 0 and 1 are missing

// Input: an array of four digit numbers
// Output: the number when all digits are found

// Questions:
// Will the array ever be empty?
// Will each number in the array always be the Number datatype? 
// What happens in the instance that we have a NaN added to the array?


// Algorithm:
// Check if the data is valid - it is an array and the all the elements are numbers
// declare a variable called allDigits and assign an empty array
// create a for loop and iterate through each number
// split the number and if any of them aren't included in allDigits, add them
// if all the allDigits is equal to '01234566789', return the current number
// else continue and increment index value
// 


function findDigits(array) {
  if(!Array.isArray(array) || !array.every(num => typeof num === 'number')) {
    return 'Invalid Array'
  }
  
  let allDigits = []
  
  for(let index = 0; index < array.length; index += 1) {
    
    if (Number.isNaN(array[index])) {
      continue
    }
    
    let digits = String(array[index]).split('').map(digit => Number(digit))
    
    digits.forEach(digit => {
      if (!allDigits.includes(digit)) {
        allDigits.push(digit)
      }
    })
    
    if (allDigits.sort().join('') === '0123456789') {
      return array[index]
    }
  }
  
  return 'Missing digits!'
}

findDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) //➞ 5057
// digits found:  517-  4-38  29-6  -0

findDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) //➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) //➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing


findDigits([5719, 7218, 3989, '8161', 2676, 3847, 6896, 3370, 2363, 1381]) //-> 'Invalid Array'

//findAllDigits([]) // -> Missing digits

findDigits(undefined) // => 'Invalid Array
findDigits(null) // => 'Invalid Array
findDigits('') // => 'Invalid Array
findDigits(NaN) // => 'Invalid Array
findDigits(false) // => 'Invalid Array
findDigits(1233) // => 'Invalid Array

console.log(findDigits([1234, 5678, 9012])); // 9012
console.log(findDigits([1234, 5678, 9012, 5678])); // 9012
console.log(findDigits([9012, 1234, 5678])); // 5678
console.log(findDigits([9012, 5678, 1234])); // 1234
console.log(findDigits([1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 1000])); // 1000