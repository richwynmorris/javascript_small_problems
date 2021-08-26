1) What does this point to in the code below, and what does the method return?

```js
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod();
```

### Answer:
* `this` points to the `myChildObject`
* The code will return `undefined` as `this` refers to myChildObject and as there is no assigned value at the poroperty key, Javascript returns `undefined`.

2) In the previous problem, how would you change the context, or the value of this, to be the parent myObject?

```js
let myObject = {
  count: 1,
  myChildObject: {
    myMethod(context) {
      return context.count;
    },
  },
};

console.log(myObject.myChildObject.myMethod(myObject)); // 1 
```


3) What does the following code log to the console?

```js
let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();
```

### Answer:
The above outputs Peter Parker is the Amazing Spiderman!


4) What does the following code log to the console?

```js
let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());
```
#### Answer:
`specialDiscount` is a function invocation, not a method invocation, therefore it uses the global object as it's implicit execution context and `this` in this context is `window`. `window` does not have a property `price` and as a result returns `undefined`. As `undefined` > 2000 returns `false` the 1000 discount is never applied. 

If you want this program to log 34000, how would you fix it?

#### Answer: 
Make sure that the function uses the `.call()` method and passes in the object
's execution context to perform the operation. 

```js
specialDiscount.call(computer)
``` 