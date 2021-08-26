// Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:

// 203 -> 13 -> 10 -> 1 -> 1

// Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

// Not all numbers are happy. If we started with 11, the sequence would be:

// 11 -> 2 -> 4 -> 16 -> ...

// This sequence will never reach 1, and so the number 11 is called unhappy.

// Given a positive whole number, you have to determine whether that number is happy or unhappy.
// Examples

// Algorithm:
// Convert the NUMBER to a STRING.
// SPLIT the STRING into individual characters
// MAP the STRING Character back into NUMBERS
// DECLARE a variable called digits and ASSIGN it to array of numbers. 
// FOR LOOP 
// ITERATE over the numbers and square each of them. 
// IF SOME of the numbers are equal to 4, return false
// ELSE if SOME of the numbers are equal to 1 return true
// ELSE Reduce the numbers to a single sum and repeat 


function happy(number) {
  while(true) {
    let digits = String(number).split('').map(digit => Number(digit))
    let squareSum= digits.map(digit => digit * digit).reduce((accum, num) => accum + num)
    if (squareSum === 4) {
      return false
    } else if (squareSum === 1) {
      return true
    } else {
      number = squareSum
    }
  }
}




console.log(happy(203)) // ➞ true

console.log(happy(4)) // ➞ false

console.log(happy(107)) // ➞ false

// Notes

//     You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. 
//     Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
//     The only numbers passed to your function will be positive whole numbers.