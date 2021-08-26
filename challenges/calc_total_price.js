// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

// Problem:
// Given an array of objects, find the total price of all objects given in the array. Each object contains a quantity which contributes to the total.

// Questions:
// Should I return a string or a number? number
// Should the number be formatted in any a particular way? 1 point after the decimal.


//INPUT: An array of objects
// OUTPUT: a number.

//ALGORITHM:
// DECLARE a variable called total and assign the number 0
// ITERATE over EACH object
// On EACH iteration, time the quantity of the object by the price
// FIX the number to 1 number after the decimal point
// CONVERT the fixed number to a NUMBER type.
// REASSIGN and ADD the converted number to the total variable. 
// RETURN the total

function getTotalPrice(arrayOfObjs) {
  let total = 0;
  
  arrayOfObjs.forEach(obj => {
    let costOfObj = obj.quantity * obj.price
    total += costOfObj;
  })
  
  return Number(total.toFixed(1))
}

//Examples

// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
])// ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) // ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) // ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) // ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) // ➞ 0.3