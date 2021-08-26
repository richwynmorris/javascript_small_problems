/* 
Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.


// PROBLEM:
// Given an array of objects. Each object is a wine. Return the name of the wine that is the second cheapest.
// If given an empty array - null
// array of one object - return the name of that wine.

// INPUT: an array of objects
          - name - string
          - price - number
// OUTPUT:  a string - name of the wine.

// Questions
// Will there only be two keys, name and price => yes
// Will the name value always be a string? => yes.
// Will the price always be a number? => yes
// Will it always be a number made up of digits - Yes
// What should I return is the object is empty? => Will never be object

//ALGORITHM:
// ITERATE through the objects in the givenArray
// MAP each object with an array with contains the name and the price
// SORT the givenArray by the price - lowest to highest
// select the subArray which is at the index of 1
// from the subarray value at index position 0

Examples
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"
chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null


Notes
All wines will be different prices, so there is no confusion in the ordering.*/

function chosenWine(givenArr) {
  if (givenArr.length === 0) {
    return null;
  }
  
  givenArr = givenArr.map(obj => {
    return [obj.name, obj.price];
  })
  
  givenArr.sort((a,b) => a[1] - b[1])
  
  return givenArr[1][0]
}


console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) === 'Wine 9')

console.log(chosenWine([])) //➞ null