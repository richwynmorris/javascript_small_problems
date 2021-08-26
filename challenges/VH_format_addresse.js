// Create a function that decomposes an address string into an array of five substrings:

//     Street Number
//     Street Name
//     City Name
//     State
//     Zip Code

// Examples


// Split string into the 5 above categories. Return each category as an string element in an array.

// Questions:
// Will the first word in the string be digits only? Yes
// Will the street name always contain a word, space and 2 two letter word ? Yes
// Should I remove punctuation? Yes

// INPUT: string
// OUTPUT: array containing 6 string elements

// DECLARE a variable called result and assign it an empty array
// DECLARE a variable called streetNumber and assign it with the the digits that MATCH the start of the string - .match(/[0-9]+ /g)
// DECLARE a variable called streetName and assign it with the string pattern of repeated word characters, space, 2 characters = .match(/[a-zA-Z]+ [a-zA-Z][a-zA-Z]/g)
// DECLARE var cityName assign city - .match(/ [\w]+,/g)
// DECLARE variable state - assign .match(/ [A-Z][A-Z]/g)
// DECLARE zipCode assign - .match(/ [0-9]+/g)
// ADD all variables to result.
// ITERATE THROUGH RESULT
// MAP each word and REMOVE prefix or suffix spaces and any punctuation.
// RETURN result

function decomposeAddress(address) {
  let streetNumber = address.match(/[0-9]+ /g).shift()
  let streetName = address.match(/[a-zA-Z]+ [a-zA-Z][a-zA-Z]/g).shift()
  let cityName 
  if (address.match(/[a-zA-Z]{3,} [a-zA-Z]*,/g)) {
    cityName = address.match(/[a-zA-Z]{3,} [a-zA-Z]*,/g).shift()
  } else if (address.match(/[a-zA-Z]*,/g)) {
    cityName = address.match(/[a-zA-Z]*,/g).shift()
  }
  let state = address.match(/ [A-Z][A-Z]/g).shift()
  let zipCode = address.match(/ [0-9]+/g).shift()
  
  let result = [streetNumber, streetName, cityName, state, zipCode]
  
  return result.map(item => {
    item = item.trim()
    item = item.replace(/[^A-Za-z0-9 ]/, '')
    return item
  })
}


console.log(decomposeAddress("557 Farmer Rd Corner, MT 59105"))
// ➞ ["557", "Farmer Rd", "Corner", "MT", "59105"]

console.log(decomposeAddress("3315 Vanity St Beverly Hills, CA 90210")) // => the City name can be more than one word, endpoint is a comma

// ➞ ["3315", "Vanity St", "Beverly Hills", "CA", "90210"]

console.log(decomposeAddress("8919 Scarecrow Ct Idaho Falls, ID 80193"))
// ➞ ["8919", "Scarecrow Ct", "Idaho Falls", "ID", "80193"]
