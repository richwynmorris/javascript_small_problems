/*

You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

Examples

splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
Notes

The input array will never be empty.
Objects will always have a name and quantity over 0.
The returned object should have each fruit in the same order as the original.



*/


// Problem:
// Given an array of objects, each contains a key value pair, the name of the fruit and quantity. Splitting the number of each quantity into an individual object with the quantity of 1.

// Input: array of objects.
// Output: an array of objects.

// Questions
// Will it always be an array object that's passed to the function - yes
// Will quantity always a number primitive? - yes
// What should I do is the number of NaN or Infinity ? - Always numbers
// What should I return if the array is empty? - return undefined

// Algorithm:
// declare a local variable called splitFruits and assing it an am epmty array.
// declare a new variables called fruitsAndTotals and assign a new empty object
// declare a local variable called result and assing it an empty obj
// iterate over the array of objects
//  assign a key value pair for fruitsAndTotals using the objects keys = name and quantity
//   - make sure they key is lowercase
// iterate of the fruitsAndTotals keys
//   create a loop that runs for the numbers of times there are the quantity
// push the new object key and quantity to result object
// return the object within an array.

function splitBunches(arrOfObjs) {
  let fruitsAndTotals = {}
  let result = []
  
  arrOfObjs.forEach(obj => {
     let fruit = obj['name'].toLowerCase()
     if (fruitsAndTotals[fruit]) {
      fruitsAndTotals[fruit] += obj['quantity']
     } else {
      fruitsAndTotals[fruit] = obj['quantity']
     }
  })
  
  let keys = Object.keys(fruitsAndTotals)
  
  keys.forEach(key => {
    let times = fruitsAndTotals[key]
    for(let count = 0; count < times; count +=1) {
      result.push({name: key, quantity: 1})
    }
  })
  
  return result
}

function splitBunches(array) {
  let result = [];
  
  array.forEach(element => {
    for (let i = 0; i < element.quantity; i += 1) {
      result.push({ name: element.name.toLowerCase(), quantity: 1 });
    }
  });

  return result;
}



splitBunches([
  { name: "grapes", quantity: 2 }
 ]) // ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]

splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) // ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 },
  { name: "BANANAS", quantity: 2 }
])

/*

[
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 },
]

*/
splitBunches([
]) // => undefined

