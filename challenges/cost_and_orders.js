// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.
// Examples
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }
// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }

// Problem:
// given an object containing keys and values, return a new object that contains only the key value pairs where the value is higher than the given cost.

// Input: two args - an object - a Number that is the cost.
// output: a new object which only contains the keys and values where the value is higher than the given cost.

// Questions: 
// What should we do in the instance that we're given an empty object? (return 'Invalid Data')
// Will the values contained always be numbers? (yes)
// What should we do if NaN is entered in as a value - (treat it as zero)
// What should we do if NaN is entered as a cost - (treat it as zero)
// What order should the objects be returned in? (Order of sequence within the object)
// What should we do if we're given a non Object as an argument? (Return 'Invalid data')
// What about an array? (Do not accepts arrays)


// Algorithm:
// check that the argument is an object and is not an array.
//   - if it is, return 'Invalid Data'
// declare a new object in the scope of function called result.
// declare a new variable called orderKeys and assign it with an array of the keys from the given object.
// iterate through the array of keys and use each key to check if the value is greater than the given cost
//   - if it is, add the key value pair to the `result`.
// return `result`.


function expensiveOrders(orders, cost) {
  if(typeof orders !== 'object' || Array.isArray(orders) || Object.keys(orders).length === 0) {
    return 'Invalid Data'
  } else if (Number.isNaN(cost)) {
    cost = 0
  }
  
  let result = {}
  let orderKeys = Object.keys(orders)
  
  orderKeys.forEach(key => {
    if (orders[key] > cost) {
      result[key] = orders[key]
    }
  })
  
  return result
}

// Happy Path: 
// selects the key value pairs which are over the given number
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000) // { "a": 3000, "c": 1050 }
expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000) // ➞ { "Gucci Fur": 24600 }

// Edge Cases:
// test empty object
expensiveOrders({}) // 'Invalid Data'
// test order of result 
expensiveOrders({ "c": 1050, "a": 3000, "b": 200 }, 1000) // { "c": 1050,  "a": 3000 }
// test NaN as value in object
expensiveOrders({ "c": NaN, "a": 3000, "b": 200 }, 1000) // {"a": 3000 }
// test NaN as given cost 
expensiveOrders({ "c": 1050, "a": 3000, "b": 200 }, NaN) // { "c": 1050, "a": 3000, "b": 200 }
// test non object argument
expensiveOrders(1234) // 'Invalid Data'
// test array argument
expensiveOrders([]) //'Invalid Data'


// Time: 29:17 mins