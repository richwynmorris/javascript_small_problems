// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence 
// for that array. You may assume that the array always contains at least one number.

// Examples:

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35


function sumOfSums(arr) {
  let total = 0
  
  arr.forEach((element, index, array) => {
    total += array.slice(0, index + 1).reduce((accum, element) => accum + element)
  })
  
  return total
}