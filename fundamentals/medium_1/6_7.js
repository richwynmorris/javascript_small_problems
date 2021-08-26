function fibonacciRecursive(times) {
  if (times <= 2) {
    return 1
  } else {
    return fibonacciRecursive(times - 1) + fibonacciRecursive(times - 2)
  }
}

function fibonacci(times) {
  let startingSeq = [1,1]
  
  for(let index = 0; index < times - 2; index += 1) {
    let nextNum = startingSeq[0] + startingSeq[1]
    startingSeq.shift()
    startingSeq.push(nextNum)
  }
  
  return startingSeq[1]
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765