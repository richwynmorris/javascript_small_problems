// Given an array, create a function that returns an object detailing how many times each element was repeated. Sort the object by value in descending order.
// Examples

// Given an array of elements, return an object that has each element as a key and the number of times it is included in the array as a value. THe retuned object should have the properties sorted from highest to lowest of the values.

// Questions
// Will it always be an array that is passed to the function? 
// Yes
// What should I return if the array is empty? => Empty array
// Are '0' and 0 considered the same value ? => yes.
// Will the array ever contain anything other than strings and numbers ? => No

// INPUT: An Array
// OUTPUT: an object


function countRepetitions(array) {
  let result = {}
  
  array.forEach(element => {
    result[element] ? result[element] += 1 : result[element] = 1
  })
  
  return Object.fromEntries(Object.entries(result).sort((a,b) => b[1] - a[1]))
}

console.log(countRepetitions([])) // => {}

console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"])) 

//➞ { cow: 3, cat: 2, dog: 1 }

console.log(countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]))

// ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

console.log(countRepetitions(["Infinity", "null", "Infinity", "null", "null"])) // ➞ { null: 3, Infinity: 2}

console.log(countRepetitions([1, 5, 5, 5, 12, 12, '0', '0', '0', 0, 0, 0])) 

// ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }