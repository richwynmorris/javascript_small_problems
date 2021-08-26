### Question
What happens when you invoked a method or look up a property on a object?

### Answer:
Javascript first searches the calling object for either the property or method. If it does not find it in the calling object, it moves up the prototype chain and inheritence hierarchy searching each object until the property or the function is found. If it is not found, Javascript returns `undefined`. If it a method that is called, Javascript trys to the invoke the method using `undefined` which raises an error. 

### Quesiton:
Why is the prototype chain useful?

### Answer:
It is useful because it means we don't need to store the same behaviours and data across multiple related objects. Instead we can share behaviours and object by using the prototype chain in specific areas. 

### Question:
What is the benefit of being able to instantiated objects with the same behaviours?

### Answer:
1) We can create as many objects as need we to with the same behaviours without needing to create each new object the behaviours individually.
2) If we want to change the behaviours or data of any objects instantiated from a the prototype, we only need to modify the prototype and not each individual object. 

### Question:
What is behaviour delegation? 

### Answer:
From a top down/ design perspective, prototypal inheritence allows behaviours and data to be inherited in the prototypal chain from the upstream objects. From a bottom up/ run time perspective, the objects on the bottom of the prototypal chain are able to delegate operations to upstream objects that are higher in the prototypal chain either be executed or return a value.

### Question:
Can objects be given autonomy to perform polymorphically if they are instantiated from a prototypcal object ?

### Answer:
Yes, they can. Objects, even if they are instantiated from a prototype can be assigned properties and methods that override the default behaviours and values of the prototype object it was created from.

### Question:
How can you check if an object has a property that is defined locally and doesn't just exist somewhere in its prototypcal chain?

### Answer:
There are two ways:
1) Use the `callingObj.hasOwnProperty(prop)` function which returns true is the object itself contains the property that is passed in as an argument.
2) Use the `Object.getOwnPropertyNames(passedInObj) function which returns a list of the properties that exist within the object that is passed in as an argument to the function.

### Question:
How are objects able to call methods that don't exist within them locally?

### Answer:
All objects are decended from `Object` which means that any object created has access to `Objects` methods. 

A few examples of useful methods that objects inherit from Object are:
* Object.prototype.toString(obj) => returns the object in a string format.
* callingObj.isPrototypeOf(obj) => returns true if the passed in object is a prototype of the calling object.
* callingObj.hasOwnProperty(prop) => returns true if the passed in property name is a property on the calling object. 

## Problems:
1) What will the code below log to the console?

```js
let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a);
```

### Answer:
The code will log `1` as the `a` property that is assigned to `foo` also becomes available to `bar` as `foo` is the prototype of `bar`.

2) What will the code below log to the console?

```js
let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);
```

### Answer:
The code will output to the console `2` as `bar` has been mutated so that locally the property key `a` references the value 2.

3) Given the code below, do we know for certain that on the last line we are ultimately referencing a property owned by boo? How can we test that far is not delegating to boo?

```js
let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1
```

We can't know for sure as somewhere in the `lots of code` section, `far` may have been assigned a property called `myProp`. The only way to verify that `far` is referencing the property owned by boo is to call `far.hasOwnProperty(myProp)`. If this method returns true then `far` has its own property `myProp` is locally will overide the one inherited by boo. 