 // * Create a function that takes in an array of numbers or strings and returns an array with the items from 
 // * the original array stored in subarrays. Items of the same value should be in the same subarray. The 
 // * subarrays should be returned in the order of each element's first appearance in the given array.
 // *


// Problem
// take a list of elements from an array and place them into subarrays.
// any elements that are the same should be placed in the same array.
// each subarray should be ordered by the first time they appear in the arrays

// Input: an array of strings or numbers.
// output: an array of elements in sub arrays, ordered by their appearence in the original array. 


// algorithm
// - declare a new variable called subArrayCollection and assign an empty array/
// - iterate over the elements in each array, using forEach and passing each element to the callback function
// - if the new sub array collection contains the element already, continue
// - else count how many time the element appears in the original array using filter and length
// - use the count to repeat the number of times  the element  is appear in the new subarray
// - push the new sub array to subArrayCollection
// return the subArrayCollection

function subArrays(array) {
  if (!Array.isArray(array)) {
    console.log('Invalid Input')
    return 'Invalid Input'
  } else if (array.length === 0) {
    console.log([])
    return []
  }
  
  let subArrayCollection = []
  
  array.forEach(element => {
    if(subArrayCollection.flat().includes(element)) {
      return
    } else {
      let subarr = []
      let numOfElements = array.filter(elementCheck => elementCheck === element).length
      for(let count = 0; count < numOfElements; count += 1) {
        subarr.push(element)
      }
      subArrayCollection.push(subarr)
    }
  })
  
  console.log(subArrayCollection)
}

subArrays([1, 2, 3, 4, 5]) // => [[1], [2], [3], [4], [5]]
subArrays(['1', '2', '3', '4', '5']) // => [['1'], ['2'], ['3'], ['4'], ['5']]
subArrays([1, 2, 3, 4, 2]) // => [[1], [2,2], [3], [4]]
subArrays([3, 4, 5, 1, 1]) // => [[3], [4], [5], [1, 1]]
subArrays([3, 4, 5, 1, 1, '1', '1']) // => [[3], [4], [5], [1, 1], ['1', '1']]

subArrays([1, 'a', 2, 'b']); // [[1], ['a'], [2], ['b']]
subArrays([1, 'a', 2, 'a']); // [[1], ['a', 'a'], [2]]
subArrays([1, 1, 2, 'b']); // [[1, 1], [2], ['b']]
subArrays([1, 'a', 'b', 'b']); // [[1], ['a'], ['b', 'b']]
subArrays(([NaN, NaN, Infinity, '']))

subArrays(42); // 'Invalid input.'
subArrays('foo'); // 'Invalid input.'
subArrays(false); // 'Invalid input.'
subArrays({}); // 'Invalid input.'
subArrays(undefined); // 'Invalid input.'
subArrays(null); // 'Invalid input.'
subArrays(); // 'Invalid input.'
