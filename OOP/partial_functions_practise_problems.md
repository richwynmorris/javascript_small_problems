1) Using partial function application implement a function, sub5, that returns the value of a number subtracted by 5.

#### Answer: 

```js
function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5)
}

sub5(10); // 5
sub5(20); // 15
```

2) This code is a bit limited however, because we can only subtract by 5. Implement the makeSubN function below so that we can supply any value we want to be subtracted from a, and get a new function that will always subtract this value.

#### Answer:

```js
function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function(num) {
    return subtract(num, n)
  }
}

let sub5 = makeSubN(5);
console.log(sub5(10)); // 5
```

3) Although the solution above is more flexible, we now want to be able to supply any operation, not just subtraction. Implement makePartialFunc below.

#### Answer: 
```js
function makePartialFunc(func, b) {
  return function(num) {
    return func(num, b)
  }
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500
```

6) In our previous solution, multiplyBy5 retains access to func and b long after makePartialFunc has finished execution. What makes this possible?

### Answer:
Closures make this possible as the annonymous function `multiplyBy5` references continues to reference the variables that were in scope when the function was was created. 

7) Implement makeMathRollCall such that it returns a partially applied rollCall function, with the subject as 'Math'.

#### Answer:
```js
let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  let subject = 'Math'
  return function(arrayOfStudents) {
    return rollCall(subject, arrayOfStudents)
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
``` 
