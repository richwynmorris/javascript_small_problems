// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let rlSync = require("readline-sync")

let age = rlSync.question('What is your age?\n')
let retirementAge = rlSync.question('At what age would you like to retire?\n')

let yearsOfWork = retirementAge - age

let year = new Date().getFullYear()

console.log(`It's ${year}. You will retire in ${year + yearsOfWork}.`)
console.log(`You only have ${yearsOfWork} years of work to go!`)