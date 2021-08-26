1) Write a function named makeMultipleLister that, when invoked and passed a number, returns a function that logs every positive integer multiple of that number less than 100.

#### Answer: 

```js
function makeMultipleLister(num) {
  let result = num
  return function () { 
    while(result < 100) {
      console.log(result)
      result += num
    }
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91
``` 

2) Write a program that uses two functions, add and subtract, to manipulate a running total value. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console.

#### Answer: 
```js
let total = 0;

function add(num) {
  total += num
  console.log(total)
}

function subtract(num) {
  total -= num
  console.log(num)
}

add(1);
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
//10
```

3) Given the following code:

```js
function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus = // ?
```
How can you set the value of systemStatus to the value of the inner variable status without changing startup in any way?
    
### Answer:

You can't, the variable is private and cannot be accessed publicly without altering the function. 