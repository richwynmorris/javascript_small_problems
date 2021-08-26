let rlSync = require('readline-sync')
let integer = Number(rlSync.question('Enter an integer greater than 0:\n'))
let answer = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.')
let result = 1

if (answer.toLowerCase() === 's') {
  for (let index = 2; index < integer + 1; index++) {
    result += index;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${result}.`)
} else if (answer.toLowerCase() === 'p') {
  for (let index = 1; index < integer + 1; index++) {
    result *= index;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${result}.`)
} else {
  console.log("Sorry, that's not a choice! Try again!")
}


