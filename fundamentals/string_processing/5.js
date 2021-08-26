// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// Examples:

function swapCase(string) {
  return string.split('').map(letter => {
           if (letter.match(/[A-Z]/)) {
             return letter.toLowerCase()
           } else {
            return letter.toUpperCase()
           }
        }).join('')
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"