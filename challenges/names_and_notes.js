// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.

// PROBLEM:
// Given an array of objects, each object containsing a student name and an array of notes, return an array of objects with each student name and average number of the notes combined. 

// Questions: 
// Will the function only ever take an array as its datatype? Yes
// Will the notes every be empty? => Yes - if they are the average evaluates to 0.
// Are there any rounding rules I should be aware of ? No, any decimal number is acceptable. 
// Should the object be in their original order? Yes.
// Will the numbers in the notes array always be a digit and not a number like Infinity, NaN ? => Yes.

// ALGORITHM:
// ITERATE over each object in the given array
// MAP each object with a new object
// AVERAGE the array and assign to a new local variable called avg
//       -> REDUCE the numbers in the array and divide by the arrays LENGTH
// RETURN the new object
// RETURN the array

function getStudentsWithNamesAndAvgNote(arr) {
  return arr.map(obj => {
    let average
    if (obj.notes.length === 0) {
      average = 0
    } else {
      average = obj.notes.reduce((accum, num) => {
        return accum += num
      }) / obj.notes.length
    }
    return {name: obj.name, avgNote: average}
  })
}

// Examples

let arr = [
  { name: "John", notes: [3, 5, 4]}
] 

let arr2 = [
  { name: "John", notes: [3, 5, 4]},
  { name: 'Richard', notes: []}
] 

console.log(getStudentsWithNamesAndAvgNote(arr))
//  => [
//   { name: "John", avgNote: 4 }
// ]


console.log(getStudentsWithNamesAndAvgNote(arr2))
//  => [
//   { name: "John", avgNote: 4 }
//   { name: "Richard", avgNote: 0}
// ]
