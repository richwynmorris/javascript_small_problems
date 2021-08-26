function star(num) {
  const limiter = Math.floor(num / 3)
  let outsideSpaces = 0
  let insideSpaces = limiter
  let stringCaptures = []
  
  while(outsideSpaces <= limiter) {
    stringCaptures.push(formatStar(outsideSpaces, insideSpaces))
    if (insideSpaces == 0) {
      break
    }
    outsideSpaces += 1
    insideSpaces -= 1
  }
  
  stringCaptures.push('*'.repeat(num) + '\n')
  
  while (outsideSpaces > -1) {
    stringCaptures.push(formatStar(outsideSpaces, insideSpaces))
    outsideSpaces -= 1
    insideSpaces += 1
  }
  
  console.log(stringCaptures.join(''))
}

function formatStar(oSpaces, iSpaces) {
  return ' '.repeat(oSpaces) + '*' + ' '.repeat(iSpaces) + '*' + ' '.repeat(iSpaces) + '*' + '\n'
}
