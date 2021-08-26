// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]

// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Problem:
// Write a function that return the total number of elements in an array, whilst also counting the number of element that may be contained within a nested sub array. 

// Input: an array of elements, elements can either be array 
// Output: the total number of elements included in the arrays and its nested arrays.


// Questions
// What kind of elements are included? Is it just numbers and arrays? S
// What should we do if we encounter an object? convert it to an array or ignore it?
// How many levels of nested arrays will we have? 
// What should we do in the instance that an array isn't passed to the function?
// Should our function mutate the array? 


// algorithim:
// declarea a variable called flatArray and assign it a a copy of our arguements value using the slice method
// while loop - is every element is NOT a number
//   -- invoke .flat() on the array and reassign the new array value to the flatArray variable
// after while condition breaks, return the length of the flatArray var. 



function getLength(array) {
  let flatArray = array.slice()
  
  while(!flatArray.every(element => typeof element === 'number')) {
    flatArray = flatArray.flat()
  }
  
  return flatArray.length
}

getLength([1, 2, [3]])// => 3
getLength([1]) // => 1
getLength([1, [2, [3, [4]]]]) // => 4
getLength([1, [2], 1, [2]]) // 4
getLength([]) // => 0 

// What I learned:
// flat() returns a new array.
// flat() takes an argument which is the depth to which the array should be flattened.
// if you pass `infinity` as an argument to the `flat()` method. It gets flattens out all sub arrays. 