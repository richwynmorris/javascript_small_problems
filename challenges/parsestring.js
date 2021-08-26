// Create a function which takes in an encoded string and returns an object according to the following example:
// Examples

function parseCode(str) {
  let result = {firstName: '', lastName: '', id: ''}
  str.replace(/0+/g, ' ').split(' ').forEach((str,index) => {
   let keys = Object.keys(result)
   result[keys[index]] = str
  })
  return result
}

parseCode("John000Doe000123")
//➞ {
//   firstName: "John",
//   lastName: "Doe",
//   id: "123"
// }

parseCode("michael0smith004331") 
// ➞ {
//   firstName: "michael",
//   lastName: "smith",
//   id: "4331"
// }

parseCode("Thomas00LEE0000043") 
// ➞ {
//   firstName: "Thomas",
//   lastName: "LEE",
//   id: "43"
// }