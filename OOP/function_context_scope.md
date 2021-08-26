1) Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

```js
let person = {
  firstName: 'Rick',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// The code will output NaN as `this` outside the context of an function refers to the global object. In this case, the global object does not have the properties of firstName and lastName and thus returns `undefined`. When `undefined` is added to `undefined` it returns `NaN`.  
``` 

2) Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

### Answer:
It does not return the desired object as the `allMovies` function is invoked in the global scope. In the global scope, `this` refers to the global object because `this` is dependent on the context it is used in, not where the function is defined.  

```js
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  },
};

console.log(franchise.allMovies())
```

3) In the previous exercise, we had a situation where an anonymous method passed to map had an undesirable execution context. We solved the problem by taking advantage of lexical scoping and introducing a new variable self. Solve the same problem again by passing a hard-bound anonymous function to map.

### Answer:
```js
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }.bind(this));
  },
};

console.log(franchise.allMovies())
```

4) Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.


### Answer:
```js
function myBind(func, contextObj) {
  return function() {
    func.call(contextObj)
  }
}

function printWords () {
  this.words.forEach(word => console.log(word))
}

let obj = {
  words: ['hello', 'world']
}

let obj2 = {
  words1: ['does', 'this', 'work']
}

let testFunction = myBind(printWords, obj)

testFunction()

testFunction(obj2)
``` 

5) Alter the myBind function written in the previous exercise to support partial function application.


### Answer:
```js
function myBind(func) {
  return function(contextObj) {
    func.call(contextObj)
  }
}

function printWords () {
  this.words.forEach(word => console.log(word))
}

let obj = {
  words: ['hello', 'world']
}

let obj2 = {
  words: ['does', 'this', 'work']
}

let testFunction = myBind(printWords)

testFunction(obj)

testFunction(obj2)
```

6) In this exercise we'll update the implementation of myFilter by adding the functionality of accepting an optional thisArg just like the original Array.prototype.filter.

Here's our original implementation. We also show an example of how we want to call our modified function: the 3rd argument, filter, supplies the desired context (thisArg).


### Answer:
```js
function myFilter(array, func, thisArg) {
  const result = [];
  func = func.bind(thisArg)

  array.forEach(value => {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

console.log(myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter)); // returns [5, 6]


console.log(myFilter([2, 1, 5, 5, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter)); // returns [5, 6]
```

7) Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the value assigned to the variable count after the function counter is run on line 10?

```js
function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)
  };
}

const counter = makeCounter();
counter();
// more code
```
#### Answer:
It will not as the variable count is referenced in the returned function's closure. . 


8) A stack is a compound data type like an array. The difference between an array and a stack is that in an array you can insert and remove elements in any order you want, but a stack has a rule whereby you can only add new elements at the end and remove the last inserted element.

Create a function newStack, that when called returns a stack object with three methods: push, pop, and printStack. push takes a value and inserts it at the end of the stack. pop removes the last element from the stack. printStack logs each remaining element of the stack on its own line.

Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.

#### Answer:
```js
function newStack() {
  let stack = []
  
  return {
    push(val){
      stack.push(val)
    },
    pop(){
      stack.pop()
    },
    printStack(){
      stack.forEach(element => console.log(element))
    },
    
  }
}

let testStack = newStack();

testStack.push('hello')
testStack.push('world')
testStack.push('remove me')
testStack.pop()
testStack.printStack()
``` 

Can you think of a way to refactor this code so we don't have any other variables in the global scope besides greeter?

### Answer:
```js
function greeter() {
  const name = 'Naveed';
  const greeting = 'Hello';
  
  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    }
  }
};


let person = greeter()
person.sayGreetings()
```
10) Make the list students private. Right now, anyone can gain access to it and manipulate it. -- DONE
    
Make the constraint for allowed values for years a private variable. As a private variable it avoids an unnecessary statement in the addStudent method and at the same time makes the code more declarative. == Done

Make the getCourse function accessible in the addGrade method also. As it is, only the courseReport method has access. == Done

```js
const school = (() => {
  const students = [];
  const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
  
  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }
    
  return {
    addStudent(name, year) {
      if (validYears.includes(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade(student, courseName, grade) {
      const course = student.listCourses().filter(({name}) => name === courseName)[0];

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },

    courseReport(courseName) {
      function getCourse(student, courseName) {
        return student.listCourses().filter(({name}) => name === courseName)[0];
      }

      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);

        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;

        console.log('---');
        console.log(`Course Average: ${String(average)}`);
        }
      },
    }
})();


function createStudent(name, year) {
  return { name,
           year,
           courses: [],
           info() {
             return `${this.name} is a ${this.year} student`
           },
           addCourse(course) {
             this.courses.push(course)
           },
           listCourses() {
             return this.courses
           },
           addNote(courseNum, noteInfo) {
             this.courses.forEach(obj => {
               if (Object.values(obj).includes(courseNum)) {
                 obj.notes = noteInfo
               }
             });
           },
           viewNotes() {
             this.courses.forEach(course => {
               if (course.notes) {
                 console.log(`${course.name}: ${course.notes}`);
               }
             });
           },
           updateNote(noteToUpdate, newNote ) {
            this.courses.forEach(obj => {
              if (Object.values(obj).includes(noteToUpdate)) {
                obj.notes = newNote
              }
            });
           }
         }
}
```