// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
// Examples


// Problem
// Given a string, retrieve the 3 longest words and convert them into hastags. The hash tags should be returned in an array. 
// If there is an equal tie for the number of words retrieve the word that comes first in the string.

// Questions:
// What should I return if the string is empty? = Empty array.
// Will it always be a string that's passed to the function - yes.
// Should the word contain punctuation? -> no word will contain punctuation.
// WIll the string always have 1 space between words?
// NOTE : hashtag should be lowecase.

// Algorithm:
// IF the strings length is 0, return an empty array.
// IF the strings length is <= 3, return all words as hastags.
// DECLARE a variable called hastags and assign an empty array
// SPLIT the string into words.
// ITERATE through each word and MAP each word with its length.
// SORT the words array by size.
// SLICE the 3 longest lengths and ASSIGN to a new local variable longestLengths
// LOOP through EACH words.
// IF the words length is equal to one of the highest lengths, 
// PUSH the transformed word to the hashtags array 
// BREAK the loop when the hashtags length === 3
// RETURN the hashtags array.


function getHashTags(string) {
  let hashtags = []
  let words = string.split(' ').map(word => word.replace(/[^A-Za-z]/, ''))
  
  if (words.length === 0) {
    return []
  } else if (words.length <= 3) {
    words.forEach(word => {
      hashtags.push('#' + word.toLowerCase())
    })
    return hashtags
  }
  
  let longestLengths = words.map(word => word.length)
                            .sort((a,b) => a - b)
                            .slice(words.length - 3, words.length)
  
  for(let index = 0; hashtags.length < 3; index += 1) {
    let word = words[index]
    if (longestLengths.includes(word.length)) {
      hashtags.push('#' + word.toLowerCase())
      let lengthToRemove = longestLengths.indexOf(word.length)
      longestLengths.splice(lengthToRemove, 1)
    }
  }
  
  return hashtags.sort((a,b) => b.length - a.length)
}



getHashTags("How the Avocado Became the Fruit of the Global Trade")
//➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
//➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
//➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
//➞ ["#visualizing", "#science"]

// Edge Cases:
getHashTags("")
//➞ []