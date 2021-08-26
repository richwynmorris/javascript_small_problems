// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// create alphabetical characters for both upper and lowercase
// create repeated string of shift word and split this into characters

function vignereCipher(string, keyword) {
  let lengthOfPlainText = string.replace(/[^A-Za-z]/g, '').length
  let shiftWordMultiplied = ''
  let sWIndex = 0
  
  while(shiftWordMultiplied.length < string.length) {
    shiftWordMultiplied += keyword
  }
  
  let result = string.split('').map((char, index) => {
    if (char.match(/[A-Za-z]/g)) {
      let shiftPosition = calculatePosition(shiftWordMultiplied[sWIndex])
      sWIndex += 1
      return caesarEncrypt(char, shiftPosition)
    } else {
      return char
    }
  })
  
  console.log(result.join(''))
}

function calculatePosition(letter) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()
  return alphabet.indexOf(letter.toLowerCase())
}

function caesarEncrypt(string, shiftedPosition) {
  let upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2)
  let lowerCaseAlphabet = upperCaseAlphabet.toLowerCase()
  
  let result = string.split('').map(letter => {
    let indexOfLetter = 0
      if (!letter.match(/^[A-Za-z]/)) {
        return letter
      } else if (letter === letter.toUpperCase()) {
        indexOfLetter = upperCaseAlphabet.indexOf(letter)
        return upperCaseAlphabet[indexOfLetter + shiftedPosition]
      } else if (letter === letter.toLowerCase()) {
        indexOfLetter = lowerCaseAlphabet.indexOf(letter)
        return lowerCaseAlphabet[indexOfLetter + shiftedPosition]
      }
    });
  
  return result.join('')
}

vignereCipher("Dog", 'rab')