Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:

```js
function getDefiningObject(object, propKey) {
  if (object.propKey) {
    return object
  }
  
  object = Object.getPrototypeOf(object)
  
  while(object !== null) {
    if (object.hasOwnProperty(propKey)) {
      return object
    } else {
      object = Object.getPrototypeOf(object)
    }
  }
  
  return null
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
``` 

2) Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain as the original object, and it should have the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:

```js
function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object))
  
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      newObj[prop] = object[prop];    
    }
  }
  
  return newObj
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
bar.c = 4
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
```

3) Write a function that extends an object (destination object) with contents from multiple objects (source objects).

```js
function extend(destination, ...sourceObjs) {  
  sourceObjs.forEach(sourceObj => {
    Object.getOwnPropertyNames(sourceObj).forEach(prop => {
      destination[prop] = sourceObj[prop]
    })  
  })
  
  return destination
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
``` 