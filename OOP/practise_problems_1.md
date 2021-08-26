1) What does this point to in the code below?

```js
function whatIsMyContext() {
  return this;
}
```
#### Answer
* It's impossible to know what `this` references until we know what context the function is being invoked in.


2) What does this point to in the code below?

```js
function whatIsMyContext() {
  return this;
}

whatIsMyContext();
```

#### Answer
* `this` refers to either `window` or `global` as it uses the global object as it's implicit execution context. If the function is invoked in strict mode then `this` refers to undefined. 


3) What does this point to in the code below?

```js
function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }

    baz();
  }

  bar();
}

foo();
```

#### Answer
`this` points to either `global` or `window` as the function is being invoked without a specific context and so Javascript uses the implicit global execution context, or the global object, to execute the function. If the function is executed in strict mode then it points to `undefined`. 


4) What does this point to in the code below?

```js
let obj = {
  count: 2,
  method() {
    return this.count;
  },
};

obj.method();
```
#### Answer:
`this` points to `obj` as `method` is an object method and `this` refers to the object that method is invoked in. 

5) In strict mode, what does the following program log to the console?

```js
function foo() {
  console.log(this.a);
}

let a = 2;
foo();
```

#### Answer:
This will not log anything to the console as an error will be raised. `this` when foo is invoked, in strict mode, returns `undefined`. `undefined` will not had the property `a` and as a result an error will be raised.


6) What does the following program log to the console?

```js
let a = 1;
function bar() {
  console.log(this.a);
}

let obj = {
  a: 2,
  foo: bar,
};

obj.foo();
``` 

#### Answer:
This will output 2 as the bar function is a value of the `foo` property in the `obj` object. When `bar` is invoked, it is in the context of the `obj` object and the key `a` references the value 2. This is then output to the console. 

7) What does the following code log to the console?

```js
let foo = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo.bar();
let qux = foo.bar;
qux();
``` 
### Answer:
Line 111 outputs `Object {a: 1, bar: f, baz: f}`
Line 113 returns an error as there is `baz()` is not a defined function for the global object. 