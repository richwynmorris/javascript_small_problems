function QuestionsMarks(str) {
  let indexValues = {}

  for(let i = 0; i < str.length; i++) {
    if (!Number.isNaN(Number(str[i]))) {
      indexValues[Number(i)] = Number(str[i])
    }
  }
  
  keys = Object.keys(indexValues)

  for(let i = 0; i < keys.length; i++) {
    if (indexValues[keys[i]] + indexValues[keys[i + 1]] === 10) {
      let res = str.slice(keys[i], keys[i + 1])
                   .split("")
                   .filter(letter => letter === '?')
                   .length === 3                   
      if (res) { return 'true' }
    }
  }
  return 'false'
}