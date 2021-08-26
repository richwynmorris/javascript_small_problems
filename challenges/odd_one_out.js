 // *
 // * Write a function that returns true if exactly one word in the array differs in length from the rest. Return false in all other cases. The length of the array will always have at least three or more words.
 // */

// Input - an array of strings
// Output - boolean -either true or false

// Algorithm:
// check that the datatype passed to the funciton is an array.
//      if not - return 'Invalid Data'
// check that the array is greater than 0
//      if not - return false
// convert each word to its length.
// sort the words by length
// shift the first element from array and assign it to firstWordLength
// if all the other words are the same and the firstWordLength is different, return true
// else return false


function findOddOneOut(arr) {
  if(!Array.isArray(arr)) {
    return 'Invalid Data'
  } else if (arr.length === 0) {
    return false
  } else if (arr.length === 1) {
    return true
  }
  
  let lengths = arr.map(word => word.length).sort()
  let tally = {}
  
  lengths.forEach(length => {
    tally[length] === undefined ? tally[length] = 1 : tally[length] += 1
  })
  
  let tallyValues = Object.values(tally)
  
  return tallyValues.length === 2 && tallyValues.includes(1)
}



// // Happy Paths
// // All are same length
// uniqueLength(['hello', 'helle', 'hullo',]) // => false 
// // more than one are different
// uniqueLength(['hi', 'hell', 'hullo',]) // => false 
// // exactly one is different
// uniqueLength(['hi', 'helle', 'hullo',]) // => true
// // exactly one is different
// uniqueLength(['helle', 'hullo', 'humungous']) // => true
// // an empty sting is still considered valid
// uniqueLength(['', 'hello', 'hullo',]) // => true 


// //Edge cases
// // empty array
// uniqueLength([]) // => false
// // one item is included
// uniqueLength(['hullo',]) // => true
// // non array is passed
// uniqueLength({}) // => 'Invalid Data'
// uniqueLength('hullo') // => 'Invalid Data'


// Time: 35 minutes


console.log(findOddOneOut(['a', 'to', 'be'])); // true, because 'a' is different
console.log(findOddOneOut(['add', 'to', 'be', 'bit'])); // false, because more than one word is different
console.log(findOddOneOut(['a', 'to', 'bee'])); // false, because no words are the same
console.log(findOddOneOut(['a', 'to', 'to'])); // true, because 'a' is different 
