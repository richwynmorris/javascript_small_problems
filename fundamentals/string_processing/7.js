// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// Examples:

function staggeredCase(string) {
  let count = 0
  return string.split('').map((letter) => {
            if (letter.match(/[^a-zA-z]/)) {
              return letter
            } else if (count % 2 === 0) {
                count += 1
                return letter.toUpperCase()
            } else {
                count += 1
                return letter.toLowerCase()
            }
          }).join('')
}


staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"

