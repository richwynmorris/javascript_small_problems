// ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.
// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.
// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// This is a valid ISBN, because:
// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

// Problem
// given an string containing 10 characters, identify if the string is a valid ISBN number
// it is only valid if each number, multiplied by its position in the string, modulo 11 is equal to 0.
// the last digit can either be 0-9 or 'X'. 'X' is represents 10.

// Input: a string of numbers and characters
// Output: a boolean, true or false.

// Questions: 
// - Is the input a string ora different input? (string)
// - What should the function return ? (true or false)
// - Will there be any non numerical characters in the string other than 'X'? (No)
// - What should I do if there is another datatype passed an an argument? (Return 'Invalid Input')
// - Should the 'X' still be considered 10 if it isn't capitalized? (yes)
// - What should I do if the string is more than 10 digits long? less then? (return false)


// Algorithm:
// check that the input argument is a string - return 'Invalid input' if not
// check that the length of the string is 10 characters long - return false if not.
// declare a variable, digits, and split the string into its digits. 
// If the last digit matches 'x' or 'X' reassign the value to 10.
// iterate over the digits and convert each one to a numerical value.
// reduce the digits array by multilpy the element by its index + 1 and adding it to the accumulator.
// if the result of reduce function is module 11 and equal to zero return true, else return false.


function validISBN(str) {
  if(typeof str !== 'string') {
    return 'Invalid input'
  } else if (str.length !== 10) {
    return false
  }
  
  let digits = str.split('')
  
  if (digits[digits.length -1].match(/[x|X]/g)) {
    digits[digits.length -1] = 10
  }
  
  let total = digits.map(digit => Number(digit)).reduce((accum, el, indx) => accum + (el * (indx + 1)))
  
  return total % 11 === 0
}



//Happy Paths:
validISBN('1112223338') // => false
validISBN('1112223339') // => true
validISBN('111202333X') // => true

// Edge cases:
// non string passed to function
validISBN(12345) // 'Invalid input'
// array passed to function
validISBN(['1112223339']) // 'Invalid input'
// lowercase 'x'
validISBN('111202333x') // => true
// too many digits
validISBN('111202333X123') // => false
// too few digits
validISBN('1112023') // => false

// Time = 30:45
