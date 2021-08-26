1) What function can we use to permanently bind a function to a particular execution context?

### Answer:
function.bind(context)

2) What will the code below log to console?

```js
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
```

### Answer:
It invokes nothing as `bind` simply binds the function to a particular execution context. The function must still be invoked to output the message:

```js
let newFoo = foo.bind(obj);

newFoo() // Javascript
```


3) What will the code below output?

```js
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(bar());
```

### Answer: 
5


4) What will the code below log to the console?

```js
let positiveMentality = {
  message: 'JavaScript makes sense!',
};

let negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positiveMentality);

negativeMentality.logMessage = bar;
negativeMentality.logMessage(); // Javascript makes sense! 
``` 


### Answer:
Javascript makes sense! - This is because when a function in bound to an object's execution context, it doesn't matter how many times it is reassigned to different variables, the function still continues to be bound to the execution context it was given when it was originally bound. 

5) What will the code below output?

```js
let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);
```

### Answer:
Amazebulous!

Even though bar calls the otherObj, the function that bar is referencing is still bound to its original exeution context and as a result the variable `a` in obj is output to the console



