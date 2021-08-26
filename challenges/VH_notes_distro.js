// Create a function that takes an array of students and returns an object representing their notes distribution. Have in mind that all invalid notes should not be count in the distribution. Valid notes are: 1, 2, 3, 4, 5
// Example

// Problem:
// Given an array of objects, return an object that contains the number of each notes across all objects. Anything that isn't 1,2,3,4,5 is not a valid note.

// Questions:
// Will each student have notes? No. Some students will have an empty array in the notes.
// What should I do if there are no objects in the array? => Return 'invalid data'.
// Will the numbers ever include NaN, Infinity, or -Infinity => No.
// Will the notes always be under the key 'notes'? => yes

//Algorithm:
// CHECK if the array is empty, if it is, return 'Invalid Data'
// DECLARE an object empty called result
// ITERATE through the array of object,
// MAP each objects values for the index position.
// FLATTEN the arrays
// FILTER any value that isn't 12345
// ITERATE through EACH value
// CREATE A KEY with the value 1 if it doesn'y exist.
// REASSIGN the value with plus one if it does
// RETURN result

function getNotesDistribution(arr) {
  if (arr.length === 0) {
    return 'Invalid Data'
  }
  let result = {}
  let notes = arr.map(obj => obj.notes)
                 .flat()
                 .filter(num => [1,2,3,4,5].includes(num))
  
  notes.forEach(num => {
    result[num]? result[num] += 1 : result[num] = 1
  })
  return result
}

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]))
// ➞ {
//   5: 3,
//   3: 2,
//   2: 1
// })
                     
getNotesDistribution([]) // => Invalid data

