1) With strict mode not enabled, what object serves as the implicit execution context? What happens when strict mode is enabled?

When strict mode is not enabled the `global object` or `window object` serves as the implicit execution context for variables that are not declared explicitly in the program. When strict mode is enabled, the global object no longer becomes the implicit execution content, and instead it becomes `undefined`. This then throws and error when variables are not explicitly declared in the program and prevents them from failing silently. 

2) What does the code below log?

```js
a = 10;

console.log(window.a === a); 

// The above logs true because `a` is a property of the global or window object. This means that both the window property `a` 
// and the variable `a` return the same value and the strict equality operator reutrns true. 
```


3) In strict mode, what does the code in the previous question log?

In strict mode, the previous code will raise an error stating that the variable `a` has not been declared in the program. 

4) What does the code below do?

```js
function func() {
  let b = 1;
}

func();

console.log(b);
```

The code above will raise a `ReferenceError` as when the function `func` is executed on line 28, the variable `b` is declared using the `let` keyword and is assigned the value 1. However, this variable only exists within the scope of the function and is not available as a global variable or as a property of the `global` object. As Javascript cannot find a variable declared in the global scope, it raises and error. 

5) What does the code below do?

```js
function func() {
  b = 1;
}

func();

console.log(b);
```

The code above will output the value `1` to the console. On line 42, the function `func` is invoked which executed the body of the function. Within the body of the function the variable `b` is assigned the value of `1`. As the variable `b` is not explicitly declared, it is implicity used a property key for the global object. The value `1` is then assigned to the propety of the global object, which means that whereever the variable `b` is referenced throughout the program, Javascript is able to check the global object context to find the property name and return the value it's referencing. 


6) What does the code below log?

```js
"use strict"

function func() {
  b = 1;
}

func();

console.log(b);
```

The above will raise a `ReferenceError` as strict mode prevents undeclared variables from being added as properties to the global object. 