function FindIntersection(strArr) { 
  let arr1 = strArr[0].split(", ")
  let arr2 = strArr[1].split(", ")

  let tracker= {}
  let result = ""

  arr1.forEach(num => tracker[num] = true)

  arr2.forEach(num => {
    if (tracker[num]) { 
      result += num + ',' 
    }
  })
  
  // code goes here  
  return result.slice(0, -1); 

}
   
