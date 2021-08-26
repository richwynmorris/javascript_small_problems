// Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.

// There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

function combine(obj1, obj2) {
  let combinedFigures = {}
  let result = {}
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  keys1.forEach(key => combinedFigures[key] = obj1[key])
  
  keys2.forEach(key => {
    combinedFigures[key] ? combinedFigures[key] += obj2[key] : combinedFigures[key] = obj2[key]
  })
  Object.entries(combinedFigures).sort((a,b) => a[1] - b[1]).forEach(subArr => result[subArr[0]] = subArr[1])
  return result
}

combine(user1, user2)


// becomes ➞ {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }

// Arguments

//     user1Income (Object) ⁠— an income object for user1
//     user2Income (Object) ⁠— an income object for user2
//     returns: A new object with like values combined

// Challenges

//     They won't have the same number of key-value pairs.
//     The return object must return the values ordered from lowest to highest so your answers can match the test answers.