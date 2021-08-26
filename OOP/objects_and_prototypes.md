### Objects and Prototypes.

All objects contain a hidden `[[prototype]]` property. This can be accessed via the dunder_proto. The `[[prototype]]` property can also be accessed using the function `Object.getPrototypeOf(obj)` and can be set using `Object.setPrototypeOf(obj, prototype)`

### Question:
What does the `Object.create(obj)` method do? 

### Answer: 
It creates a new object and sets the object's prototype property to that of the object that is passed in an an argument to the function. 

### Question:
How can you find out if an object is a prototype of another object? 

### Answer:
Use the `object.prototype.isPrototypeOf()` function and pass in the object you want to check against. If the passed in object is a prototype of the calling object then the function will return true.  

### Question:
Why should you use `.getPrototypeOf` or `.setPrototypeOf` instead of dunder proto?

### Answer:
Dunder proto is a depreciated property and, as a result, shoud only be used when 

### Question:
Can you use `Object.create(exampleObj)` to create a prototype chain?

### Answer:
Yes, you can. You need to manually ensure that each of the objects liked to one another by passing each successive object to the `Object.create()` method. 

### Question:
Where does a non prototype object get its prototype from if it doesn't inherit one?

### Answer:
All objects inherit their prototype from `Object.prototype` eventually up the inheritence hierachy. This is what enables objects to have access to their built in functions like `hasOwnProperty()`

### Problems:

1) Use the method we learned above to assign foo below to a new Object with prot as its prototype.

```js
let prot = {};

let foo = // ?
```

### Answer:
```js
let foo = Object.create(prot)
```
2) Use getPrototypeOf to demonstrate the prototypal relationship between prot and foo.

### Answer:
```js
console.log(Object.getPrototypeOf(foo) === prot) // => true
```

3) Use isPrototypeOf to demonstrate the prototypal relationship between prot and foo.

```js
console.log(prot.isPrototypeOf(foo)) // => true
```

4) What will the last two lines of the code below return? Why?

```js
let prot = {};

let foo = Object.create(prot);

prot.isPrototypeOf(foo);
Object.prototype.isPrototypeOf(foo);
```

### Answer:
The first line will return true and the second line will also return true. That's because all objects inherit from Object as default. As a result, Object is the prototype of all objects as it sits at the top of the inheritence hierarchy. foo inherits from prot which inherits from Object. 