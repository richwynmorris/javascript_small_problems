// Write a function that converts a sentence into pig latin.

// Rules for converting to pig latin:

//     For words that begin with a vowel (a, e, i, o, u), add "way".
//     Otherwise, move all letters before the first vowel to the end and add "ay".
//     For simplicity, no punctuation will be present in the inputs.

// Examples


// Questions - Will the input always be a string?
//           - In the instance that an empty string is given, what should I return?
//           - Will there always be one space? What should I do if two spaces are given?
//           - What should I do in the instance of capital letters? Should they stay the same? Should the 'way also be capitalized?


// Algorithm:
// declare a constant called vowels that references a an array object that contains a, e, i , o, u.
// split the words in the sentence by a space.
// declare a variable called result using the let keyword. 
// iterate over the words using map and pass each word to the callback function. 
//    if the string starts with a capital, pass it to new function addWay
              // addWay returns the passed string value with 'way' concatanated to it'
//    else, pass it to pass the string to moveLetters
                      // - slice the string from 1 to the end and concatanate the first letter concat 'way' and return
// invoked the join function on the returned new array
// assign the result of the array using join to the result variable.
// return the result.


function pigLatinSentence(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  let words = string.split(' ')
  
  let result = words.map(word => {
    if (vowels.includes(word[0])) {
      return addWay(word)
    } else {
      return moveLetters(word)
    }
  }).join(' ')
  
  return result
}


function addWay(str) {
  return str + 'way'
}

function moveLetters(str) {
  let firstVowelIndex = str.search(/[aeiou]/)
  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay'
}

pigLatinSentence("this is pig latin") // ➞ "isthay isway igpay atinlay"
pigLatinSentence("This IS pig latin") //➞ "isThay ISway igpay atinlay"
pigLatinSentence("wall street journal") //➞ "allway eetstray ournaljay"h

// What I learned: 
// Reread the critera to make sure paying attention to the specific requirements.
// rewrite the requirements in my own words before proceeding with algorithim.
// String.search() allows you to search a string and find the first index value using a regex argument.
// 