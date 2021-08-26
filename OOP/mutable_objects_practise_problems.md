## Practise Problems

1) What will the code below output to the console?

```js
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);
```

### Answer:

```
Hello from the function scope!
Hello from the global scope!
```


2) What will the code below log to the console? What does this output demonstrate in relation to the output of problem one?


```js
let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);
```

### Answer:

```
Greetings from the function scope!
Greetings from the function scope!
```

This demonstrates that objects are mutable because they are reference types. When the objects value is reassigned a new value both `obj` pointer and `myObj`s pointer are referencing the same object in the heap. Therefore, when `obj` reassigns the value of the `message` property on line 32, `myObj` also conveys this change. However, in the first example a primitive is passed to the function. As primitives are immutable, when the variable is assigned a new value, that value is added to the stack and the variable points to the new value. However, any variables which were referencing the old value still continue to point to that value in the stack. 

3) What will the code below log to the console?

```js
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);
```

### Answer:

```
Hello from the function scope!
Hello from the function scope!
```

The reason that the two strings are output above is a result of the the `func` function being executed on line 60. When this line is executed, Javascript searches the scope of the function for variable declarations, `message` within the scope of the function is not declared with a `let` keyword. As a result, Javascript this searches the outerscope of a variable declared with the same name. As `message` is declared in the outerscope, Javascript reassigns the variable in the outerscope with the new value `Hello from the function scope!`. This means that message will return the value `Hello from the function scope!` in both the global scope and the local scope of the function.


4) What will the code below log to the console?

```js
let a = 10;
let obj = {
  a
}

let newObj = obj; // {a: 10}
newObj.a += 10; // {a: 20}

console.log(obj.a === a); // => false - obj.a is 20 as both obj and newObj reference the same object in the heap
console.log(newObj.a === obj.a); // true - both variables point the same object in the heap and thus return the same primitive value
```

5) Consider the code below:

```js
let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
```

If objects are mutable, why does the second to last line return false?

### Answer:
The reason that the second to last line returns false is because the variable `animal` is reassigned a new object on lines 101 - 104. The value that the key `warthog` is referencing is itself a variable that points to an object in the heap. When the variable is given a new object to reference, the old object is no longer available reference which is what is being attempted on line 108. As a result the strict equality comparison returns false. 