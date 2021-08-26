1)Follow the steps below:

* Create an object called shape that has a getType method.
* Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
* Add a new method to the prototype called getPerimeter.

Test your implementation with the following code:

Answer:

```js
let shape = {
  getType() {
    return this.type
  }
}

function Triangle(a, b, c) {
  this.a = a
  this.b = b
  this.c = c
  this.type = 'triangle'
}

Triangle.prototype = shape

Triangle.prototype.getPerimeter = function() {
  return (this.a + this.b + this.c)
}

Triangle.prototype.constructor = Triangle 

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle
```

2) Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

Answer:
```js
function User(first, last) {
  if (this instanceof User === false) {
    return new User(first, last)
  }
  
  this.first = first
  this.last = last
  this.name = this.first + ' ' + this.last
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
``` 

3) Create a function that can create an object with a given object as its prototype, without using Object.create.

```js
function createObject(obj) {
  // ...
}

let foo = {
  a: 1
};

let bar = createObject(foo);
foo.isPrototypeOf(bar);         // true
```

Answer:
```js
function createObject(obj) {
  return Object.setPrototypeOf({}, obj)
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
```

4) Similar to the problem above, without using Object.create, create a begetObject method that you can call on any object to create an object inherited from it:

Answer:
```js
let foo = {
  a: 1,
};


Object.prototype.begetObject = function() {
  let returnedObj = {}
  Object.setPrototypeOf(returnedObj, this)
  return returnedObj
}

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
``` 

5) Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

```js
function neww(constructor, args) {
  let obj = Object.create(constructor.prototype)
  let result = constructor.apply(obj, args);
  return typeof result === 'object' ? result : obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
```