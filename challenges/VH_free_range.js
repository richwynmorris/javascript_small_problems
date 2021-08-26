// Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.
// Examples

// PROBLEM
// Given an array of numbers, return an array of all the given ranges in the a array of numbers. If there number is by itself and not a part of a range return a single number, otherwise return a range. 

// INPUT: an array
// OUTPUT: an array of strings, each string is either a single digit or an array. 

// ALGORITHM:
// DECLARE a new variable called result and assign it an empty array.
// LOOP thorugh the arrays index
// IF the next index is the current number + 1
//     RETURN
// ELSE SPLICE from 0, to the current index position
// PUSH splice to the result
// TRANSFORM USING MAP the number to ranges or inidividual numbers 


function numbersToRanges(array) {
  let result = []

  for(let index = 0; array.length !== 0; index += 1) {
    if ((array[index] + 1) === array[index + 1]) {
      continue
    } else {
      let range = array.splice(0, index + 1)
      result.push(range)
    }
  }
  
  return result.map(subarr => {
    if(subarr.length === 1) {
      return String(subarr.pop())
    } else {
      return String(subarr[0]) + '-' + String(subarr[subarr.length - 1])
    }
  })
}

console.log(numbersToRanges([1, 2, 3, 4, 5])) // ➞ ["1-5"]
console.log(numbersToRanges([3, 4, 5, 10, 11, 12])) // ➞ ["3-5", "10-12"]
console.log(numbersToRanges([1, 2, 3, 4, 99, 100])) // ➞ ["1-4", "99-100"]
console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8])) // ➞ ["1", "3-8"]

// Notes

//     If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
//     Return an empty array if the given array is empty.