// Given two words, overlap them in such a way, morphing the last few letters of the first word with the first few letters of the second word. Return the shortest overlapped word possible.
// Examples

function overlap(str1, str2) {
  if (str1 === str2) {
    return str1
  } else if (str1 === str2.slice(0, str1.length)) {
    return str2
  }
  
  for(let slicePoint = str1.length - 2; slicePoint > 0; slicePoint -= 1) {
    let lengthCheck = str1.slice(slicePoint).length
    if(str1.slice(slicePoint) === str2.slice(0, lengthCheck)) {
      return str1 + str2.slice(lengthCheck)
    }
  }
  return str1 + str2
}

console.log(overlap("sweden", "denmark")) // ➞ "swedenmark"

console.log(overlap("edabit", "iterate")) // ➞ "edabiterate"

console.log(overlap("honey", "milk")) // ➞ "honeymilk"

console.log(overlap("dodge", "dodge")) // ➞ "dodge"

console.log(overlap("leave", "eavesdrop"))
// Notes

//     All words will be given in lowercase.
//     If no overlap is possible, return both words one after the other (example #3).