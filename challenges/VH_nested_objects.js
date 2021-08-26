// Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.
// Examples

// ALGORITHM:
// Convert keys and values into entries
// iterate through each subarray and map the second element as mark's values
// push the subarray to the filteredData array object IF the value doesn't already exist
// iterate through the filteredData's keys and use the key to assign the result object with the new index position and the object as a value. 


function getObject(obj) {
  let filteredData = []
  let result = {}
  
  let keysAndVals = Object.entries(obj)
  
  keysAndVals.map(subarr => [subarr[0], subarr[1].marks])
             .forEach(subarr => {
               filteredData.some(arr => subarr[1] === arr[1]) ? null : filteredData.push(subarr)
             })
  
  filteredData.forEach((subarr, index) => {
                result[index] = obj[subarr[0]]
              })
  
  return result
}

getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}) 

// ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}) 

// ➞    {
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 16, name: 'Robin', marks: '200'},
//   2: {age: 16, name: 'Bella', marks: '300'},
//   3: {age: 16, name: 'john', marks: '250'}
// }