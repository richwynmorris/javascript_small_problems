// Write a function that takes a string, and returns an object containing the following three properties:

//     the percentage of characters in the string that are lowercase letters
//     the percentage of characters that are uppercase letters
//     the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// Examples:

function letterPercentages(string) {
  let letters = string.split('')
  let resultObj = { lowercase: 0,
                    uppercase: 0,
                    neither: 0, 
                  }
  
  let totalLetters = letters.length
  
  letters.forEach(letter => {
    if (!letter.match(/[A-Za-z]/g)) {
      resultObj.neither += 1 
    } else if (letter.match(/[A-Z]/)) {
      resultObj.uppercase += 1
    } else {
      resultObj.lowercase += 1
    }
  })
  
  Object.keys(resultObj).forEach(key => {
    resultObj[key] = Number(resultObj[key] / totalLetters * 100).toFixed(2)
  })
  
  return resultObj
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }