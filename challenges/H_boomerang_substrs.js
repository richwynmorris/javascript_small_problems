// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array. 

// Problem
// You have an array of numbers. You need to count the number of sub arrays that contain a boomerang formation.
// A boomerang formation is considered to be a sub array that has 3 elements. the first and third are the same. However the middle is different. 


// Questions:
// Will it only be numbers that are given?
// SHould we ignore sub arrays that don't have 3 items

// Input: an array of numbers
// Output: Number - the count of boomerangs.


// Algorithm:
// declare variable startIndex and assign the value of 0
// declare variable endIndex and assign it the value of 3
// declare a variable called subStrings and assign it an empty array.
//  initial while loop - break if the slice taken is not equal to 3
// push each substring to Substrings. 
// increase the start and end index's
// filter subStrings by boomerang condition and reassing result to subStrings
// count the length of subStrings.


function countBoomerangs(array) {
  let startIndex = 0
  let endIndex = 3
  let subStrings = []
  
  while(array.slice(startIndex, endIndex).length === 3) {
    subStrings.push(array.slice(startIndex, endIndex))
    startIndex += 1
    endIndex += 1
  }
  
  subStrings = subStrings.filter(substr => {
    if (substr[0] === substr[2] && substr[1] !== substr[0]) {
      return substr
    }
  })
  
  return subStrings.length
}

countBoomerangs([3, 7, 3, 1, -1, 1, 5, 6, 5]) // => 3
countBoomerangs([3, 7, 3, 1, 1, 1, 5, 6, 5]) // => 2
countBoomerangs([3, 7, 3, 1, -1, 1, 5, 6]) // => 2
