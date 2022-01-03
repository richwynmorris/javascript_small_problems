// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

function pairZeros(arr) {
  var toggle = false
  const result = []
  
  arr.forEach(num => {
    if (num !== 0) {
      result.push(num)
    } else if (num === 0 && toggle === false) {
      toggle = true
      result.push(num)
    } else {
      toggle = false
    }
  })
  
  return result
}