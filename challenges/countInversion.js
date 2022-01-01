function countInversions( array ){
  let count = 0
  let trueCount = 0
  if (array.length === 0) return 0
  
  while (trueCount !== array.length - 1) {
    trueCount = 0
    for(let index = 0; index < array.length; index += 1) {
      if (array[index + 1] === undefined) {
        continue
      } else if (array[index] <= array[index + 1]) {
        trueCount += 1
      } else {
        const tmp = array[index + 1]
        array[index + 1] = array[index], array[index] = tmp
        count += 1
      }
    }
  }
  return count;
}
