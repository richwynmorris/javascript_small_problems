// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Problem
// if sum of all digits if odd, return string 'Oddish'.
// otherwise return 'Evenish'.

// Questions
// What should happen if the function is given a non string value? 
// should the function process strings which contain only numbers?


// Input: Number
// number to NumString
// NumString to array
// array to Number
// Output: String - either 'Oddish' or 'Evenish'


// Algorithm
// if the type of value of the parameter isn't equal to Number and or is NAN, return 'Invalid Input'
// Take number and split into an array of digits.
// reduce the array of digits to a single number by adding each digit to an accumulator
// Check if the the result of the recude function is module 2 and equal to 0 
//   if it is return 'Evenish
//   else  return 'Oddish'.


function oddishOrEvenish(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    return 'Invalid input'
  }
  
  let digits = String(num).split('')
  
  let sum = digits.reduce((accum, element) => accum + Number(element), 0)
  
  if (sum % 2 === 0) {
    return 'Evenish'
  } else {
    return 'Oddish'
  }
}

console.log(oddishOrEvenish(121))// => 'Evenish'
console.log(oddishOrEvenish(41)) // => 'Oddish'
console.log(oddishOrEvenish(0)) // => 'Evenish'
console.log(oddishOrEvenish('121')) // 'Invalid input'
console.log(oddishOrEvenish(NaN)) // 'Invalid input'


// Things I learned:
// Remeber that NaN === NaN is equal to false. You have to use `Number.isNaN?(num)` to determine is the value is NaN.
// Remember to always think about datatypes like NaN that can be considered a number and COULD be passed toa function and be used as a valid input when workings with typical number values. 