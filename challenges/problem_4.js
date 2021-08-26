// INCOMPLETE

// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

//     "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
//     "1-3, 1-2" --> 1, 2, 3, 11, 12
//     "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
//     "104-2" --> 104, 105, ... 112
//     "104-02" --> 104, 105, ... 202
//     "545, 64:11" --> 545, 564, 565, .. 611


// Problem 
// return the list of complete numbers based on the shorthand significant numbers and the range seperators that are included in the string.

// Questions:
// Will it include positive numbers only? What happens if its a negative number?
// What should I do in the instance that the string is empty?
// Will the string ever contain anything other than the numerical values or the sperators? 

// Input: a string of numbers
// Output: an array? 

function completeNumbers(string) {
  let result = []
  let stringParts = string.split(', ')
  
  let chunked = stringParts.map(string => {
    if (string.match(/[\-:\-]/g)) {
      return string.split('')
    } else {
      return string
    }
  }).flat()

  for(let index = 0; index < chunked; index += 1) {
    let currentElement = 
    if(index)
  }
  
  console.log(chunked)
}

function getRange(start, end) {  
  let result = []
  for(; start <= end ;start += 1) {
    result.push(start)
  }
  return result
}

function getNextNum(start, endNum) {
  let slicedNum = endNum.length * -1
  for(let nextNum = start + 1; ; nextNum += 1) {
    if (String(nextNum).slice(slicedNum) == endNum) {
      return String(nextNum)
    } 
  }
}


completeNumbers("1, 3, 7, 2, 4, 1") // -> [1, 3, 7, 12, 14, 21]
completeNumbers("1-3, 1-2") // -> [1, 2, 3, 11, 12]
completeNumbers( "1:5:2") // -> [1, 2, 3, 4, 5, 6, ... 12]
completeNumbers("104-2") // -> [104, 105, ... 112]
completeNumbers("104-02") // --> 104, 105, ... 202
completeNumbers("545, 64:11") // --> 545, 564, 565, .. 611
// start at zero?
// completeNumbers("0, 0, 0") // --> [0, 10, 20]
// // negative numbers?
// completeNumbers("-1-4" )