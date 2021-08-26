let rlSync = require('readline-sync')

let bill =rlSync.question('What is the bill?\n')
let percentage = rlSync.question('What is the percentage?\n')

let tip = (bill / 100) * percentage
let total = Number(bill) + tip

console.log(`The tip is £${tip.toFixed(2)}`)
console.log(`The total is £${total.toFixed(2)}`)