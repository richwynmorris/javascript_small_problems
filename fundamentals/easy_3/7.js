// Write a function that takes an array of numbers, and returns an array with the same number of elements, 
// with each element's value being the running total from the original array.

// Examples:

function runningTotal(array) {
  let runningCount = [] 
  for(let i = 1; i < array.length + 1; i++) {
    let sum = array.slice(0, i).reduce((accumulator, currentVal) => accumulator + currentVal);
    runningCount.push(sum)
  }

  return runningCount
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []