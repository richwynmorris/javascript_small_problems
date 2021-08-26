### Practise Problems

1) What are the characteristics that define higher-order functions?

#### Answer:
Higher order functions are functions that can either receive a function as an argument, return a function or can do both. 

2) Consider the code below:

```js
let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]
```

Of the two functions invoked (checkEven and filter), which is a higher-order function and why?

#### Answer:
`filter` is the higher-order function because it recieves checkEven, which is a function, as an arugment. `checkEven` , however, does not either return a function or takes a function ar an arugment. 

3) Implement makeCheckEven below, such that the last line of the code returns an array [2, 4].

```js
let numbers = [1, 2, 3, 4];
function makeCheckEven(num) {
  if (num % 2 === 0 ) {
    return num
  }
}

let checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]
```


Answer: 
```js
let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(num) {
    if (num % 2 === 0 ) {
      return num
    }
  }
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]
```

4) Implement execute below, such that the return values for the two function invocations match the commented values.

```js
function execute(func, operand) {
  func(operand)
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"
```

```js
function execute(func, operand) {
  return func(operand)
}
``` 

5) Implement makeListTransformer below such that timesTwo's return value matches the commented return value.

```js
function makeListTransformer(func) {
  return function(array) {
    let transformFunc = func
    return array.map(transformFunc)
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
```

### Answer:
```js
function makeListTransformer(func) {
  return function(array) {
    let transformFunc = func
    return array.map(transformFunc)
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
```
