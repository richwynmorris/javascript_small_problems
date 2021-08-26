// You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart. The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

// Create a function that takes an object and returns the total price after discount.
// Examples

// PROBLEM
// Given an array of objects, select the object with the greatest price. Reduce that object's price by 25 percent. An object can have multi[;e quantites. ONLY apply the discount to one item. Return the total price of the shopping cart after the discount has been applied. 

// INPUT: An array of objects
// OUTPUT: a number which is the total.

// Questions:
// Will it always be an array that is passed to the function? Yes
// What should I return is the array is empty? 0
// Will the quantity and price of each object contain a positive number? i.e not Infinity, -Infinity or NaN => Yes. 
// Will there every be a other property key other than name, quantity or price? No.
// Should the function return a string or a numnber? number. 
// Will name's values always be a string? Yes.
//


// ALGORITHM:
// IF the array is empty RETURN 0
// DECLARE a new variable called totalPrices and assign it an empty array
// ITERATE through EACH object
// PUSH the price by the number of quantity to the totalPRices array.
// SORT totalPrices in descending order. 
// SELECT the first element in the array and reduce that elements value by 25%
// REASSIGN the first value in the array with the dicsount applied.
// IF the totalPrices equal to 1 RETURN the first element
// REDUCE the array to a total sum 
// RETURN the total sum

function twentyFiveOnOne(arr) {
  if (arr.length === 0) {
    return 0
  }
  
  let totalPrices = []
  
  arr.forEach(obj => {
    let times = obj.quantity
    for(let index = 0; index < times; index += 1) {
      totalPrices.push(obj.price)
    }
  })
  
  totalPrices = totalPrices.sort((a,b) => b - a)
  
  let discountedItem = totalPrices[0] - (totalPrices[0] / 100) * 25
  totalPrices[0] = discountedItem
  
  if (totalPrices.length === 1) {
    return Number(totalPrices.pop().toFixed(2))
  }
  
  let result = totalPrices.reduce((accum, el) => accum + el)
  
  return Number(result.toFixed(2))
}


console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
])) // ➞ 58124.25

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
])) // ➞ 86.96

console.log(twentyFiveOnOne([
])) // ➞ 0

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 10 },
])) // ➞ 7.5

