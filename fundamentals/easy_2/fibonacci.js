function findFibonacciIndexByLength(numLength) {
  let arr = [1, 1];
  let lastIndex = arr[arr.length - 1];
  let nextToLastIndex = arr[arr.length - 2];
  
  for(;true;) {
    arr.push(lastIndex + nextToLastIndex);
    lastIndex = arr[arr.length - 1];
    nextToLastIndex = arr[arr.length - 2];
    if (String(arr[arr.length - 1]).length === numLength) {
      console.log(arr.length);
      break;
    }
  }
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
