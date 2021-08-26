// The police call. They need a more detailed list of the stolen goods.

// You are given an array with nested arrays that represent each room in your mansion where the goods were stolen. Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match, the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.

// Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.
// Examples

function makeDetailedList(arr) {
  let subArrayKeys = arr.map(subarr => subarr[0])
  let subObjs = []
  let result = {}
  
  arr.forEach(subarr => {
    let subObj = {}
    subarr[1].forEach((item, index) => {
      subObj[item] = subarr[2][index] 
    })
    subObjs.push(subObj)
  })
  
  subArrayKeys.forEach((key, index) => {
    result[key] = subObjs[index]
  })
  
  return result
}


console.log(makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]]))
// ➞ { kitchen: { piano: 1000, tv: 50 } }


console.log(makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]))
//➞ {
//   basement: {
//     "baseball bat": 500
//   },
//   garage: {
//     horses : 110,
//     cadillac: 2000,
//     flowers: 30
//   }
// }