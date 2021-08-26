// Create a function that takes an array and return the most frequently occuring element contained within it.

// Input: array of elements
// Output: an element from the array that occurs the most frequently

// Questions:
// what should you do if there are two elements with the same frequency? (first element found in the array)
// Should we count falsy values?
// will the array only contain primitives?
// what should I do in the instance that a non array object is passed to the function?
// what should I do in the instance that it is an empty array.
// What should I return is there is no most frequent? => first element


//Algorithm:
// if the argument passed to the function is not an array, return invalid input
// if the argument passed to the function is empty, return invalid input
// create an array without duplicates 
// iterate through non dups and map them to a sub array containing the element and the number of times
// it appears
// filter the array by the non dup element and return the new arrays length.
// return the sub array to be mapped.
// sort results by each arrays second value
// return the last arrays first element


function findMostFrequent(array) {
  if(!Array.isArray(array) || array.length === 0) {
    return 'invalid input'
  }
  
  let result  = array.filter((element, index) => { 
    return index === array.indexOf(element) || Number.isNaN(element)
  })
  
  result = result.map(element => {
    if (Number.isNaN(element)) {
      return numOfNaNs(array)
    }
    let appearences = array.filter(arEl => arEl === element).length
    return [element, appearences]
  })
  
  return result.sort((a,b) => b[1] - a[1])[0][0]
}

function numOfNaNs(array) {
  let num = array.filter(el => Number.isNaN(el)).length
  return [NaN, num]
}


console.log(findMostFrequent([1, 1, 2, 2])); // 1
console.log(findMostFrequent([1, 1, 1, 2])); // 1
console.log(findMostFrequent(['1', '1', 2, 2])); // '1'
console.log(findMostFrequent([1.2, 1, 1.2, null])); // 1.2
console.log(findMostFrequent(['a'])); // 'a'
console.log(findMostFrequent(['A', 'a', 'A'])); // 'A'
console.log(findMostFrequent([true, true, false, 2])); // true
console.log(findMostFrequent(['1', false, false, false])); // false
console.log(findMostFrequent([null, 1, 1, null])); // null
console.log(findMostFrequent([NaN, 1, 1, NaN])); // NaN
console.log(findMostFrequent([Infinity, 1, Infinity, null])); // Infinity
console.log(findMostFrequent([undefined, 1, Infinity, undefined])); // undefined

// Edge Cases
console.log(findMostFrequent([])); // 'Invalid input.'
console.log(findMostFrequent('')); // 'Invalid input.'
console.log(findMostFrequent(42)); // 'Invalid input.'
console.log(findMostFrequent(false)); // 'Invalid input.'
console.log(findMostFrequent({})); // 'Invalid input.'

