### Question: 
What is a constrictor function?

### Answer:
A constructor function is just an ordinary function that intended to be called using the `new` keyword. The `new` keyword creates a new execution context for the function to operate in without using the global scope. `this`, within the context of the function that has been invoked using `new`, refers to a new object that function creates. Constructor functions use a capital letter at the beginning of them to denote a constructor function. 

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

let kim = new Person('Kimberley', 30)
```

### Question:
What happens when you invoke a constructor function using `new`?

### Answer:
* The function creates a new object
* `this` in the context of the function refers to the new object.
* The fuction returns `this` unless an object is explicitly returned from the function
* The function is executed.

### Question:
What happens if you forget to use the `new` keyword?

### Answer:
This can cause potential issues as the `new` keyword creates a new execution context and an object for `this` to refer to. Without `new`, Javascript defaults to having `this` refer to the global variable in the global scope. 


### Problems:

1) What naming convention separates constructor functions from other functions?

Answer: The naming convention for constructor functions is a capital letter at the beginning of the function name. 

2) What will the code below output? Why?

```js
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
```

Answer: This will return a error as `Lizard` has been called without using the `new` keyword which means `this` in the context of the `Lizard` function is refering to the global object. The global object is assigned the property of `scamper` which references the function value. However, `lizzy` does not. As `lizzy` does not have a property of `scamper, javascript automatically returns `undefined`. As a `undefined` is not a function, Javascript throws and error. 

3) Alter the code in problem 2 so that it produces the desired output.

Answer: 

```js
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?
```
