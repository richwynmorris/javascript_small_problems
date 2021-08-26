## Closures and Garbage Collection:

In the following code, when can JavaScript garbage collect the values assigned to the variables a, b, and c?

```js
let a = 'abc';

function add(b) {
  a += b;
  // `abc` is garbage collected after `a` is reassigned a new value of `abcxyz` on line 9. 
  // `xyz` is a copy of the argument passed to the function and is garbage collected after `add` has been executed on line 15.
}

function run() {
  let c = add('xyz');
  // `undefined` is garbage collected after `run` has been exectued and returns on line 19.
}

run();
// a's value of 'abcxyz' is elligible for GC when the program has finished exectuion.

```

2) In the following code, when can JavaScript garbage collect the value "Steve"?

```js
function makeHello(name) {
  return function() {
    console.log("Hello, " + name + "!");
  };
}

let helloSteve = makeHello("Steve");
```

### Answer:
JavaScript cannot garbage collect the value of 'Steve' until after the program has finished execution. This is because the returned function creates a closure over the variable `name` that references the string `Steve` when it is returned. This means 'Steve' can only be GC when the program finished exection and `makeHelllo` is not longer required. 

3) Is JavaScript a garbage-collected language, and if so, what does this entail?

#### Answer:
JavaScript is a garbage-collected language as it automatically allocates space in the memory for data, assigns data to that space, allows variables to reference that space, updates space with additional references and deallocated the space of its data once it is no longer needed in the program. 

4) Consider the code below:

```js
let myNum = 1;

function foo() {
  let myStr = 'A string';
  // what is eligible for GC here?
  // answer: Nothing is elligible for garbace collection here as numbers are primitives and are stored on the stack and 'A string' is referenced by myStr in the scope of this function.
}

foo();

// what is eligible for GC here?
// Answer: 'A string' is eligible for GC as the function has been executed and `A string` no longer has a variable that references the value in the global scope. 

// more code
```

5) In the code below, is the value of outerFoo eligible for garbage collection on line 10?

```js
let outerFoo;

function bar() {
  let innerFoo = 'abc';
  outerFoo = innerFoo;
}

bar();

// can outerFoo's value be garbage collected here?

// more code
```

#### Answer:
`outerFoo`'s value cannot be garbage collected on line 10 as the variable declared in the outerscope still references the 'abc' value it is assigned in the inner scope. Values can only be GC if there are no variables referencing the value. 

6) Consider the code below:

```js
function makeString() {
  let index = 'abc';
  return function() {
    return index += 'xyz';
  };
}

let str = makeString();

// is 'abc' eligible for GC here?

// more code
```

Is 'abc' eligible for garbage collection on line 10?

#### Answer:
No it is not as `str` which references the annonmous function has not been invoked yet. As a result, `index` still continues to reference 'abc' until the anon function has been executed and reassigned the new value 'abcxyz'. Morever, the function has created a closure which mean's `index` always refer to `'abc'`.


7) Consider the script below:

```js
let bash = "Some val";
```

Will the value "Some val" ever be eligible for garbage collection?

#### Answer:
It will be eligible for GC when the JavaScript enging has finished executing the program. 