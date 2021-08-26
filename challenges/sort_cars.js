//  11:11
// In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

// Have the same color or different colors.
// Have the same number or different numbers.
// Have the same shades or different shades.
// Have the same shape or different shapes.
// The four properties are:

// Colors: red, purple, green
// Numbers: 1, 2, 3
// Shades: empty, lined, full
// Shapes: squiggle, oval, diamond
// Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

// A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.

// Each card has four properties.
// 3 cards form a set if one property in each object is the same and all other properties across all other objects are different. 

// Questions:
// What should the return value be? -> Boolean true if valid set, else false
// Will the objects contain any other properties other than the ones given ? 
// Will the number key ever contain values - NaN Infinity => always digits
// Will it always be an array object that's passed to the function -> always be an array?
// What should I do if the array if the array is empty? - return false
// Will there always be 3 cards in the set ? -> A string all uppercase characters 'CHEAT!'  - more or less than 3
// Don't always know about each property value. 

// Input: An array of objects - object is a card's properties
// Output: true/false/ or 'CHEAT!'

// I need to check firstly that they all share a same property
// I need to check all other proerties are different from on another

function validCard(arrOfObjs) {
  if (arrOfObjs.length === 0) {
    return false
  } else if (arrOfObjs.length !== 3) {
    return 'CHEAT!'
  }
  
  let colors = []
  let numbers = []
  let shade = []
  let shape = []

  arrOfObjs.forEach(obj => {
    colors.push(obj.color)
    numbers.push(obj.number)
    shade.push(obj.shade)
    shape.push(obj.shape)
  })

  let organisedData = [colors, numbers, shade, shape]

  let figures = organisedData.map(arr => {
    return arr.filter((el, index) => index === arr.indexOf(el)).length
  }).sort()

  return figures.toString() === '1,3,3,3'
}


console.log(validCard([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" }, 
  { color: "red", number: 2, shade: "lined", shape: "diamond" },  
  { color: "red", number: 3, shade: "full", shape: "oval" }
])) // => true

// "Same" properties: color
// "Different" properties: numbers, shading and shapes

// check that order of doesn't matter
console.log(validCard([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" }, 
  { color: "blue", number: 2, shade: "empty", shape: "diamond" },  
  { color: "orange", number: 3, shade: "empty", shape: "oval" }
])) // => true

// check that if 2 properties have 3 matching results, still returns false
console.log(validCard([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" }, 
  { color: "red", number: 2, shade: "empty", shape: "diamond" },  
  { color: "red", number: 3, shade: "empty", shape: "oval" }
])) // => true


// checks that there are 3 cards
console.log(validCard([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" }, 
  { color: "blue", number: 2, shade: "empty", shape: "diamond" },  
])) // => CHEAT!

// checks that there are 3 cards
console.log(validCard([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" }, 
  { color: "blue", number: 2, shade: "empty", shape: "diamond" },  
  { color: "orange", number: 3, shade: "empty", shape: "oval" },
  { color: "orange", number: 3, shade: "empty", shape: "oval" }
])) // => CHEAT!

//checks an empty array
console.log(validCard([]))
// => false

//check thats cards are not a set
console.log(validCard([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
])) // => false

// Colors are not all identical, but not all different.