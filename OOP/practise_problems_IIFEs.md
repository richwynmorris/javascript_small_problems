1) Will the code below execute?

```js
function() {
  console.log("Sometimes, syntax isn't intuitive!")
}();
```

It won't execute as the function needs to be wrapped in brackets to enclose the function as an expression. 

2) Edit the code from problem one so it executes without error.

```js
(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();
```

3) The code below throws an error:

```js
var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // ?
```

4) What kind of problem does this error highlight? Use an IIFE to address it, so that code runs without error.

#### Answer:

This problem highlights how a variable can only reference one value and that by declaring a function with the same name as a variable will over write it. You can use an IIFE to pass in the `numbers` array to an annonymous function that will automatically execute when JavaScript encounters it in the program.

```js
var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3]

sum += (function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum)
``` 

5) Implement a function countdown that uses an IIFE to generate the desired output.

```js
countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!
```

#### Ansswer:
```js
function countdown(num) {
  (function(num) {
    for(;num > -1; num -= 1) {
      console.log(num)
    }
    console.log('Done!')
  })(num);
}
``` 

6) Is the named function in this IIFE accessible in the global scope?

```js
(function foo() {
  console.log('Bar');
})();

foo() // ?
```

It is not accessible in the global scope even though the function is named. This is because the parenthesis indicates to the JavaScript engine that function is an IIFE and should only be executed at runtime and not be saved as a global variable.  

7) For an extra challenge, refactor the solution to problem 4 using recursion, bearing in mind that a named function created in an IIFE can be referenced inside of the IIFE.

#### Answer:
```js
function countdown(num) {
  (function dropNum(num) {
    if (num < 0) {
      console.log('Done!')
      return
    } else { 
      console.log(num)
      num -= 1
      dropNum(num)
    }
  })(num);
}
```