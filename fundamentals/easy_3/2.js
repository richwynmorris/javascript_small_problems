// Write a program that solicits six numbers from the user, then logs a message that describes
//  whether or not the sixth number appears amongst the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].

let rlSync = require("readline-sync")
let stringPositions = { '1st':0, '2nd':0, '3rd':0, '4th':0, '5th':0, 'last':0 }

for (let i = 0; i < 6; i++) {
  let currentKey = Object.keys(stringPositions)[i]
  let answer = rlSync.question(`Enter the ${currentKey} number:\n`)
  stringPositions[currentKey] = answer
}

let numbers = Object.values(stringPositions).slice(0, 5)

if (numbers.includes(stringPositions['last'])) {
  console.log(`The number ${stringPositions['last']} appears in [${numbers.join(', ')}].`)
} else {
  console.log(`The number ${stringPositions['last']} does not appear in [${numbers.join(', ')}].`)
}
