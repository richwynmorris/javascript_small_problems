// Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.

// To illustrate:

maxPossible(9328, 456) // ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.


// Problem
// Make the first number given as an argument as high as possible by exchanging its digits with the digits that are given in the second number.


// Questions:
// Will both arguments always be numbers? - Yes
// Will the numbers ever be non digits e.g. NaN, infinity, - infinity? -> no.
// What should I return if the second argument is 0. => return the original number
// Should the return value be a stirng or a number => number 


// Algorithm:
// IF the second number === 0, RETURN first number
// SPLIT the digits of the second number into digit strings/
// SORT the numbers from highest to lowest (b - a) // ENSURE you compare using Number
// SPLIT the digits for the first number.
// ITERATE with MAP through the digits.
// IF the digit is less than digit in the second number,
//     SLICE the second number's first digit and RETURN
// ELSE return the digit.
// JOIN the digits and return as NUMBER 


function maxPossible(firstNum, secondNum) {
  if(firstNum === 0) {
    return secondNum
  }
  
  let secondDigits = String(secondNum).split('').sort((a,b) => Number(b) - Number(a))
  
  let firstDigits = String(firstNum).split('').map(digit => {
    if(Number(digit) < Number(secondDigits[0])) {
      return secondDigits.splice(0, 1).pop()
    } else {
      return digit
    }
  }).join('')
  
  return Number(firstDigits)
}


// Examples

maxPossible(523, 76) // ➞ 763

maxPossible(9132, 5564) // ➞ 9655

maxPossible(8732, 91255) // ➞ 9755

maxPossible(8732, 0) // ➞ 8732

// Notes

//     Each digit in the second number can only be used once.
//     Zero to all digits in the second number may be used.