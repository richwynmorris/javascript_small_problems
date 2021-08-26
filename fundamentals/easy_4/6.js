// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements 
// from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// Example:

function interleave(...args) {
  let results = []
  for (let i = 0; i < args[0].length; i++) {
    results.push(args[0][i])
    results.push(args[1][i])
  }
  console.log(results)
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
