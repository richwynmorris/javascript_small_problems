// You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.
// Example

// DATA STRUCTURE
// ARRAY - OBJECT - TEACHER
//                - DATA  - ARRAY - OBJECT

// ALGORITHM:
// DECALRE new variable called results
// ITERATE THROUGH EACH OBJECT
// DECLARE teacher variable and assign it with the value of the teacher key.
// ASSIGN results.teacher = key
// DECLARE students variable and assign it with the values of the data key
// students is now an array.
// ITERATE over the students
// DECLARE an new variable called student and assign an empty object
// Assign teacher key with teacher variable value
// GET THE students keys
// ASSIGN result[key] = student.key
// Push result to results. 

function ungroupStudents(arr) {
  let results = []
  
  arr.forEach(obj => {
    let teacher = obj.teacher
    let students = obj.data // => an array
    students.forEach(student => {
      let result = {}
      result.teacher = teacher
      let keys = Object.keys(student)
      keys.forEach(key => {
        result[key] = student[key]
    })
    results.push(result)
    })
  })
 
  return results
}

ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergencyNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}])




// ➞ [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]