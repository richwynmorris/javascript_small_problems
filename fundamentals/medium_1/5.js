function wordToDigit(string) {

  let regex = /one|two|three|four|five|six|seven|eight|nine/g
  
  let obj = { one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5',
              six: '6',
              seven: '7',
              eight: '8',
              nine: '9'
            }
  
  let result = string.split(' ').map(word => {
                  if (word.match(regex)) {
                    let match = word.match(regex).join('')
                    return word.replace('\\b' + match + '\\b', obj[match])
                  } else {
                    return word
                  }
                }).join(' ')
  
  console.log(result)

}

wordToDigit('Please call me at five five five one two three four. Thanks.');
wordToDigit('The weight is done.');      // "The w8 is d1."
// "Please call me at 5 5 5 1 2 3 4. Thanks."