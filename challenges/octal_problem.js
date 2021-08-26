function octalToDecimal(numberString) {
  let count = 0
  let result = 0 
  
  let revString = numberString.split('')
                              .reverse()
                              .forEach(element => {
                                result += Math.pow(8, count) * element
                                count += 1
                              })
  return result
}

octalToDecimal('233');           // 155
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9


// Better option:

function octalToDecimal(numberString) {
  let octalNums = numberString.split('')
                              .reverse()
                              .map ((number, index) => {
                                return Math.pow(8, index) * number
                              })

  console.log(octalNums.reduce((accum, element) => accum + element))
  
}