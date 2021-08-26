
//  function that returns the length of the shortest subarray whose sum of all elements strictly exceeds n.
//  */

// Problem
// find the shortest subarray of the array that is are passed to the function that is greater than the number that is passed in an an argument. 

// input: array of elements and number which sub array must be greater than
// output: sub array that equals the number

// questions:
// will the array only contain numbers => yes
// does the sub array need to use the order of the arrays elements or any elements from the array => arrays order
// what should I return if it does not exeed the number => return -1
// what should I return if any of the arguments that are passed to funciton are not the ones the expected => return the statement 'Invalid Inputs:
// what happens if there is two subarrays that are greater bu equal to one another? (select the first)


// Algorithm:
// check that array is an array object
// check that number is number and not NaN
// declare a variable called subStrs and assign it an empty array
// collect the substrings by creating an inner and outerloop
//    Use two forEach startements to collect slices of each sub array
// filter the substrs by checking that each array when reduced is greater than the number given
//    if there are no substrs after filter, return -1
// find the shortest subarray that appears first in the array/
//  return subarr


function shortestSubArray(arr, num) {
  if(!Array.isArray(arr) || (typeof num !== 'number' || Number.isNaN(num) || num === Infinity || num === -Infinity || arr.length === 0)) {
    return 'Invalid Input'
  }
  
  let subStrs = []
  
  arr.forEach((num, index) => {
    arr.forEach((innerNum, innerIndex) => {
      subStrs.push(arr.slice(index, innerIndex + 1))
    })
  })

  subStrs = subStrs.filter(subStr => {
                      let total = subStr.reduce((accum, num) => accum + num, 0)
                      return total > num
                    })
                   .sort((a,b) => a.length - b.length)
  
  if (subStrs.length === 0) {
    return -1
  }
  
  return subStrs.shift()
}



// Happy Paths:
// subarray is greater then input
// shortestSubArray([1,1], 1) // => [1,1]
// // // subarray cannot be greater than input
// shortestSubArray([1], 1) // => -1
// // // selects shortest subarray from mixture of numbers
// shortestSubArray([1,1,3,2,4], 5) // => [2,4]
// // // select the first shortest subarr
// shortestSubArray([3,2,1,5,4], 5) // => [1,5]


// // Edge cases
// // wrong datatype for array
// shortestSubArray(undefined, 1) // => 'Invalid Input'
// // wrong datatype for num
// shortestSubArray([1,1,], undefined) // => ' Invalid Input'
// // no elements in the array
// shortestSubArray([], 1) // => -1
// // NaN passed as number
// shortestSubArray([1,1,], NaN) // => 'Invalid Input'


// Happy Paths
console.log(shortestSubArray([2, 0, 0, 1], 1)); // 1, because [2]
console.log(shortestSubArray([1, 1, 0, 1], 1)); // 2, because [1, 1]
console.log(shortestSubArray([1, 1, 1, 1], 3)); // 4, because [1, 1, 1, 1]
console.log(shortestSubArray([1, 1, 1, 1], 4)); // -1, because can't exceed
console.log(shortestSubArray([1, 0], 0)); // 1, because [1]
console.log(shortestSubArray([0, -1, 1], -1)); // 1, because [0]


//Edge Cases
console.log(shortestSubArray([], 2)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], NaN)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], Infinity)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], -Infinity)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], '')); // 'Invalid input.'
console.log(shortestSubArray([1], true)); // 'Invalid input.'
console.log(shortestSubArray([1], [1])); // 'Invalid input.'
console.log(shortestSubArray([1], {})); // 'Invalid input.'
console.log(shortestSubArray(42, 2)); // 'Invalid input.'
console.log(shortestSubArray('foo', 2)); // 'Invalid input.'
console.log(shortestSubArray(true, 2)); // 'Invalid input.'
console.log(shortestSubArray({}, 2)); // 'Invalid input.'
