// The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

// You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.


// Problem:
// You receive an object with a nested object as its value. The nested object contains properties that have strings as values. The string values must then be converted to their numerical values. If the numerical value is NaN, after being converted, then don't return the key value property. 


// Questions:
// Will there ever be any other datatype used as a value or will it always be strings? -> always strings
// What should I return if the argument is not an object? -> if the object is empty return 0
// What should I return if the nested object is empty?  -> return an empty object
// Will the string values always be whole numbers? -> yes
// Will any of the strings be equal to 'undefined', 'null', 'infinity'? -> no
// Will any of the string be equal to minus numbers? If they are, what should be the appropriate respnse? -> no
// What should I return if there are no matching propertie -> return an empty object


// Algorithm:
// Get the object keys as an array.
// iterate over the keys. With each key, get the nested objects keys.
// declare a local variable result and assign it an empty obj
// iterate over the nested objects keys using map and convert each one to a number
// if the nested key's value is not eqaul to NaN push it to the new object.
// assign the object key with the new nested object.
// return the object.


function findAndRemove(obj) {
  let objKeys = Object.keys(obj)
  
  objKeys.forEach(innerObj => {
   let nestedKeys = Object.keys(obj[innerObj])
   let result = {}
   nestedKeys.forEach(key => {
     let valueAsNum = Number(obj[innerObj][key])
     if (!Number.isNaN(valueAsNum)) {
       result[key] = valueAsNum
     }
   })
  obj[innerObj] = result
  })
 
 return obj
}

// Examples

findAndRemove({
   bedroom: {
     slippers: "10000",
     piano: "550",
     call: "vet",
     travel: "world",
   },
 }) //➞ {
 //   bedroom: {
 //     slippers: 10000,
 //     piano: 5500,
 //   },
 // }

let data1 = findAndRemove({
   kitchen: {
     ["gold spoons"]: "900",
     piano: "550",
     notes: "ga0r76ba22g4e",
   },
   cellar: {
     reminder: "dog",
     bottle: "750",
   },
 }) 
               
let data2 = {
   kitchen: {
     ["gold spoons"]: 900,
     piano: 550,
   },
   cellar: {
     bottle: 750,
   },
 }

console.log(JSON.stringify(data1) === JSON.stringify(data2))
