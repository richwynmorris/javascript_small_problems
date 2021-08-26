// Create a function that counts the embedded names in the string and determines the equality. The names are embedded in a string of mixed special symbols and characters. The names to be counted to are adjoined with the ampersand symbol & and as the second parameter. See the following examples for more details.
// Examples

function equalCount(str, names) {
  let result = {}
  
  names = names.split('&')
  let firstname = new RegExp(names[0], 'g')
  let secondname = new RegExp(names[1], 'g')
  firstname = str.match(firstname)
  secondname = str.match(secondname)
  
  let data = [[names[0], firstname? firstname.length : 0 ], [names[1], secondname ? secondname.length : 0] ]
  
  data.forEach(subarr => {
    result[subarr[0]] = subarr[1]
  })
  
  if (data.every(subarr => data[0][1] === subarr[1])) {
    result['equality'] = true    
  } else {
    result['equality'] = false
    result['difference'] = Math.abs(data[0][1] - data[1][1])
  }
  
  return result
}


equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
//➞ {"Peter":6, "Paul": 6, "equality": true}

equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
//➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
// "difference" key is added to the object if count is not equal.

equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
//➞ {"Ken": 0, "Tom": 0, "equality": true}