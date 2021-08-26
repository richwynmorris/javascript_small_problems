// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

//     Counting from the rightmost digit and moving left, double the value of every second digit
//     For any digit that thus become 10 or more, subtract 9 from the result
//         1111 becomes 2121
//         8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
//     Add all these digits together
//         1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
//         8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.


//Problem: 
//From right to left, double the value of every second digit.
//   if the digits, when doubled, is equal to or greater than 10, subtract it by 9
// add all the values together to produce a checksum
// if the checksum % 10 === 0, return true? 

// Datastructure
// string - stringNumber - can contain non numeric values
// boolean

// Algorithm
// Remove any non digits
// split the cleanNums and reverse into an array
// iterate through the array and map each even index with a double
     // if the double if greater than 9, divide 2.
// reduce values and modulo % 10
// if the final value no equal to 0, return false,
// otherwise true

function validLuhnNum(stringNum) {
  if(stringNum === '') {
    return false
  }

  let cleanNums = stringNum.replace(/\D/g, '')
  
  let reverseNums = cleanNums.split('').reverse()
  
  let result = reverseNums.map((num,index) => {
                   if (index % 2 !== 0 && num * 2 > 9) {
                      return (num * 2) - 9
                   } else if (index % 2 !== 0) {
                      return num * 2
                   } else {
                      return Number(num)
                   }
                 })
  
  let checksum = result.reduce((accum, num) => accum + num)
  
  if (checksum % 10 === 0) {
    return true
  }
  
  return false
}


// Test Cases
console.log(validLuhnNum('1111')) // false
console.log(validLuhnNum('8763')) // true
// non alphanumeric, removed , does not affect outcome
console.log(validLuhnNum('..8763')) // true
// includes alphabetical characters?
console.log(validLuhnNum('AA8763')) // true
// spaces to seperate numbers
console.log(validLuhnNum("2323 2005 7766 3554")) // true

