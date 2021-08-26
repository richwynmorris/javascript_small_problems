// Given a knapsack with a certain weight capacity, fill it with loot from a list of items to achieve the highest value possible.

// The function takes two parameters: an int specifying the maximum weight the knapsack can hold, and an array of item Objects to choose from. Each item has a name, a weight, and a value. The total weight of all chosen items cannot exceed the capacity of the knapsack.

// The function should return an object containing the capacity of the bag, a list of items that were added to the bag (in the same order that they were given), the total weight of those items, and the total value of the items.
// Example

// Write a function that takes the limit of the knapsacks weight and an array of objects. Each object represents an item.
// Each item in the object has a name, weight and value.
// return an item each contains the maximum number of objects that can be contained in the knapsack

// spoon = {name: 'spoon',
//          weight: 1,
//          value : 10}


// fork = {name: 'fork',
//          weight: 1,
//          value : 20}

// knife = {name: 'knife',
//          weight: 2,
//          value : 15}

// {
//   capacity: 2,
//   items: [spoon, fork],
//   weight: 2,
//   value: 30
// }

// ALGORITHM:
// REASSIGN to items to the arrays from ENTRIES
// SORT the entry values by largest value to smallest
// LOOP throught the entries
// IF the combined values so far is equal to or higher than the capactiy
//    BREAK the loop
// ELSE push the array object to new array items
// DECLARE a variable called result and assign an empty object
// iterate through EACH new array item
// // Add the name to the items array of the result object
// Add the weight to the weight
// Add the value to the value
// RETURN the result


function knapsack(capacity, items) {
  let result = {capacity: 0,
                items: [],
                weight: 0,
                value: 0
               }
  
  let elementsReordered = []
  
  if (capacity === 0) {
    return result
  }
  
  result.capacity = capacity
  
  let entries = Object.entries(items).sort(([,a], [,b]) => b.value - a.value)
  
  console.log(entries)
  
  entries.forEach(item => {
    let obj = item[1]
    if((obj.weight + result.weight) <= capacity) {
      elementsReordered.push(item)
      result.weight += obj.weight
      result.value += obj.value
    }
  })
  
  let elements = elementsReordered.sort(([a,],[b,]) => a - b).forEach(element => result.items.push(element[1]))
  
  return result
}

let spoon = {name: 'spoon',
         weight: 1,
         value : 10}


let fork = {name: 'fork',
         weight: 1,
         value : 20}

let knife = {name: 'knife',
         weight: 2,
         value : 15}

let items = [spoon, fork, knife]

var items2 = [
  {name:"desk lamp",weight:2,value:12},
  {name:"beach towel",weight:1,value:10},
  {name:"textbook",weight:3,value:20},
  {name:"wall clock",weight:2,value:15},
  {name:"frozen dinners",weight:10,value:50},
  {name:"tablet",weight:7,value:1400},
  {name:"smartphone",weight:1,value:200},
  {name:"paper",weight:2,value:5},
  {name:"laser printer",weight:25,value:400},
  {name:"shoes",weight:1,value:79},
  {name:"medicine",weight:1,value:17},
  {name:"decorative cushion",weight:1,value:11},
  {name:"gold necklace",weight:1,value:2500},
  {name:"toaster oven",weight:5,value:129}
];


console.log(knapsack(2, items))
// {
//   capacity: 2,
//   items: [
//     { name: 'spoon', weight: 1, value: 10 },
//     { name: 'fork', weight: 1, value: 20 }
//   ],
//   weight: 2,
//   value: 30
// }


console.log(knapsack(1, items2))
// {
//   capacity: 1,
//   items: [ { name: 'gold necklace', weight: 1, value: 2500 } ],
//   weight: 1,
//   value: 2500
// }

console.log(knapsack(0, [])) 
// ➞ {
//   capacity: 0,
//   items: [],
//   weight: 0,
//   value: 0
// }