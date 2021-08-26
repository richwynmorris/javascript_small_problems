1) Write a function named greet that takes two arguments and logs a greeting:

```js
function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1)
  console.log(greeting + ', ' + name + '!')
}


greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!
```

2) Use the partial function shown above and your solution to problem 1 to create sayHello and sayHi functions.

```js
function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1)
  console.log(greeting + ', ' + name + '!')
}

function partial(greeting) {
  return function(name) {
    return greet(greeting, name)
  }
}


greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!


let sayHello = partial('hello')
let sayHi = partial('hi')

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!
```