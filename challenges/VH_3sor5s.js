// Starting with either 3 or 5 and given these operations:

//     add 5
//     multiply by 3

// You should say if it is possible to reach the target number n.
// Examples


function only5and3(num) {
  let threeMultiplied = 3
  let fiveAdded = 5
  
  for(;threeMultiplied < num;) {
    let leftOver = num - threeMultiplied
    if(threeMultiplied === num || leftOver % 5 === 0) {
      return true
    }
    threeMultiplied = threeMultiplied * 3
  }
  
  for(;fiveAdded <= num;) {
    if(fiveAdded === num) {
      return true
    }
    fiveAdded = fiveAdded + 5
  }
  
  return false
}

console.log(only5and3(14)) //➞ true
// // 14 = 3*3 + 5

console.log(only5and3(25)) //➞ true
// 25 = 5+5+5+5+5

console.log(only5and3(7)) //➞ false
// There exists no path to the target number 7

console.log(only5and3(51))