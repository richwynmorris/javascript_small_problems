// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

//     If version1 > version2, we should return 1.
//     If version1 < version2, we should return -1.
//     If version1 === version2, we should return 0.
//     If either version number contains characters other than digits and the . character, we should return null.

// - if any inputs contain invalid characters, return null
//   - any characters other than digits and . are considered invalid
// - Compare the two input versions
//   - if version1 > version2, return 1
//   - if version1 < version2, return -1
//   - if version1 === version2, return 0
// - The rules to compare two version numbers
//   - start from the left most parts of the two version numbers
//   - if the number part of the first version number is larger, then the first version number is larger
//   - if the number part of the second version number is larger, then the first version number is smaller
//   - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
//     - do the same comparison and decide which version number is larger
//     - keep moving to the right until the result of the comparison is determined
//       - if we reach the end of only one number, pad that number with a 0 part
//     - if we get to the last number part of the two version numbers and they're equal,
//       then the two version numbers are equal


function compareVersions(version1, version2) {
  let v1 = String(version1)
  let v2 = String(version2)
  
  if (v1.match(/^[\.]|\.\.+|[\.]$/) || v2.match(/^[\.]|\.\.+|[\.]$/)) {
    return null 
  }
  
  if (v1.match(/[^0-9\.]/g) || v2.match(/[^0-9\.]/g)) {
    return null
  }
  
  let arr1 = v1.split('.').map(num => Number(num))
  let arr2 = v2.split('.').map(num => Number(num))
  
  let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
  
  for(let index = 0; index < maxLength; index += 1) {
    let num1 = arr1[index] || 0
    let num2 = arr2[index] || 0
    
    if (num1 > num2) {
      return 1
    } else if (num2 > num1) {
      return -1
    }
  }
  
  return 0
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1