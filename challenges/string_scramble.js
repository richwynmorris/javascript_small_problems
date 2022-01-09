function StringScramble(str1,str2) { 
  let obj1 = {}
  let obj2 = {}

  str1.split("").forEach(letter => {
    if (!obj1[letter]) {
      obj1[letter] = 1
    } else {
      obj1[letter] += 1
    }
  })

  str2.split("").forEach(letter => {
    if (!obj2[letter]) {
      obj2[letter] = 1
    } else {
      obj2[letter] += 1
    }
  })

  return Object.keys(obj2).every(key => obj1[key] >= obj2[key]) ? "true" : "false"
}
