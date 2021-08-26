1) What does the following code log to the console?

```js
let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo();

foo.bar();
Foo();

obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);
```

Answer:
On line 16 the `new` keyword is used and `Foo` is becomes a constructor function, return an object. When the new object is created this.bar() is invoked and within the `Foo` context `this` refers to the newly created object which has the property `a` which references 2. This outputs 2 to the console.

As `foo` now references an object created by the `Foo` function, it issues the `bar` method, on line 18, which, within the context the object `foo` refers to has the property `a` which references the value 2. Therefore, 2 is printed out again.

On line 19, the `Foo` function is called with automatically calls the `this.bar()` function which again outputs `2` from within the context of the function.

On line 22, `Foo` calls `obj` which gives is in the global scope, therefore, the global scopes `a` property is reassigned to the value of `2`. The `bar()` function is called again which outputs 2.

On line 23, the `bar` method is called using `obj`. As `obj` was assigned the `bar` method on line 22, it is able to invoke the method and uses the global property of `a` as the value, which outputs 2. 

On line 25, `this` refers to the global object and its property `a` which now references the value 2 after being modified on line 22. This then outputs 2 again.

Output:
2
2
2
2
2
2

2) What does the following code log to the console?

```js
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
```

Answer:
This will output:
NaN
NaN

The reason this outputs NaN NaN is because on lines 64 and 65, when each method, area and perimeter, is called on the RECTANGE object, `this` in the context of the RECTANGLE object refers to `RECTANGLE` and not the context of Rectangle. This means that `width`, `height`, `area` and `perimeter` are non existentent properties on the RECTANGLE object and thus return `undefined`. `undefined` * `undefined` returns NaN. 

Follow up : How do you fix this problem?

```js
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
```

3) Write a constructor function Circle, that takes a radius as an argument. You should be able to call an area method on the created objects to get the circle's area. Test your implementation with the following code:

```js
let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
```

Answer:
```js
function Circle(radius) {
  this.squared = radius * radius
}

Circle.prototype.area = function() {
  return this.squared * Math.PI
}
```

4) What will the following code log out and why?
```js
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());
```

Answer:
This returns `true` as on line 132, Ninja is used as a constructor function which returns a new object which is assigned to the global variable `ninja`. On line, 134, the constructor function's `prototype` property is assigned a function `swingSword`. As `ninja`'s constructor is `Ninja`, when this function is invoked on the variable `ninja`, javascript first searches the properties of `ninja` before checking the dunder_proto of the object. The dunder proto of `ninja` is referencing `Ninja`'s `prototype` property which contains the function `swingSword`. This then output's the `this` value which `Ninja` is referencing which is the value `true`. 

5) What will the following code log out and why?

```js
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); 
```

Answer:
This raises and error as on line 154 the `prototype` property on Ninja is made to references a new object. However, as `ninja` is instantiated from the `Ninja` constructor function, it's dunder proto still continues to reference the original object that `Ninja.prototype` once references. As this object hasn't been mutated to contain the `swingSword` function, Javascript raises an error.  

6) Implement the method described in the comments below:

```js
let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

// solution
Ninja.prototype.swing = function() {
  this.swung = true
  return this
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true
```

7) In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

```js
let ninjaA = (function() {
  function Ninja(){
    this.test = 1
  };
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA))


console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

console.log(ninjaB)
``` 

