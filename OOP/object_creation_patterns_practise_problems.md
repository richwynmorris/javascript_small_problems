Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:
name property added to make objects easier to identify


### Solution:
```js
const foo = {name: 'foo'};

foo.ancestors = function () {
  let ancestorsArray = ['Object.prototype'];
  let nextObj = Object.getPrototypeOf(this); 
  
   while(nextObj.name !== undefined) {
     ancestorsArray.unshift(nextObj.name)
     nextObj = Object.getPrototypeOf(nextObj)
   }
  
   return ancestorsArray
}


const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
```

2) Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.

Note that this is not the same as using bind. bind returns a new function, whereas delegate maintains the reference.

### Answer:
```js
function delegate(obj, func, arg) {
  return function() {
    obj[func](arg)
  }
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'
```

3) Implement the following diagram using the pseudo-classical approach. Subclasses should inherit everything from the superclass and not just the methods. Reuse the constructors of the superclass when implementing a subclass.

### Answer:

```js
function Person(first, last, age, gender) {
  this.firstName = first
  this.lastName = last
  this.age = age
  this.gender = gender
}

Person.prototype.eat = function() {
  console.log('Eating')
}

Person.prototype.communicate = function() {
  console.log('Communicating')
}

Person.prototype.sleep = function() {
  console.log('Sleeping')
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName
}


function Doctor(first, last, age, gender, spec) {
  Person.call(this, first, last, age, gender)
  this.specialization = spec
}

Doctor.prototype = Object.create(Person.prototype)
Doctor.prototype.constructor = Doctor
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing')
}


function Student(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender)
  this.degree = degree
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
Student.prototype.study = function() {console.log("Studying")}


function Professor(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender)
  this.subject = subject
}

Professor.prototype = Object.create(Person)
Professor.prototype.constructor = Professor
Professor.prototype.teach = function () {console.log('Teaching')}


function GraduateStudent(first, last, age, gender, degree, graduateDegree) {
  Student.call(this, first, last, age, gender, degree)
  this.graduateDegree = graduateDegree
}

GraduateStudent.prototype = Object.create(Student.prototype)
GraduateStudent.prototype.constructor = GraduateStudent
GraduateStudent.prototype.research = function() {console.log("Reseaching")}


const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'


const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
```

```js
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
  
  communicate() {
    console.log('Communicating')
  }
  
  sleep() {
    console.log('Sleeping')
  }
  
  eat() {
    console.log('Eating')
  }
}

class Doctor extends Person {
  constructor(first, last, age, gender) {
    super(first, last, age, gender)
  }
  
  diagnose() {
    console.log('Diagnosing')
  }
}

class Student extends Person {
  constructor(first, last, age, gender, degree) {
    super(first, last, age, gender)
    this.degree = degree
  }
  
  study() {
    console.log("Studying")
  }
}

class GraduateStudent extends Student {
  constructor(first, last, age, gender, degree, msdegree) {
    super(first, last, age, gender, degree)
    this.graduateDegree = msdegree
  } 
  
  research() {
    console.log("Researching")
  }
}


//For the methods, you can have it log out anything you want.

// Here's a sample run you can use as a reference:

const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
``` 


### 4) Answer:

```js
const Professional = {}

Professional.invoice = function() {
  return this.fullName() +' is Billing customer')
}

Professional.payTax = function() {
  return this.fullName() + ' is Paying taxes'
}

function delegate(obj, owner, name) {
  return function() {
    return owner[name].call(obj)
  }
}

function extend(newPerson, type) {
  let keys = Object.keys(type)

  keys.forEach(key => {
    newPerson[key] = delegate(newPerson, type, key)
  })
  
  return newPerson
}
```

5) Using OLOO create an Account prototype object that anonymizes user objects on init. The created object should not have access to the function that anonymizes a user other than through the init and reanonymize methods. The function that anonymizes creates a 16 character sequence composed of letters and numbers. The following are the properties and methods on the Account object:

Answer:
```js
const Account = (() => {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;
  
  function generateDisplayName() {
    let result = ''
    for(let count = 0; count < 2; count += 1) {
      result += Math.random().toString(16).substr(2,8)
    }
    return result
  }
  
  return {
    init(emailArg, passwordArg, firstNameArg, lastNameArg) {
      userEmail = emailArg,
      userPassword = passwordArg
      userFirstName = firstNameArg
      userLastName = lastNameArg
      this.displayName =  generateDisplayName()
      return this
    },

    firstName(password) {
      if (password === userPassword) {
        return userFirstName
      } else {
        return "Invalid Password"
      }
    },

    email(password) {
      if (password === this.userPassword) {
        return userEmail
      } else {
        return "Invalid Password"
      }
    },

    resetPassword(currPass, newPass) {
      if (currPass === userPassword) {
        userPassword = newPass
        return true
      } else {
        return "Invalid Password"
      }
    },

    reanonymize(password) {
      if (password === userPassword) {
        this.displayName = generateDisplayName()
        return true
      } else {
        return "Invalid Password"
      }
    },
  }

})()


const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');

console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
```


6) 
### Answer:
```js

const ItemManager = (() => {
  let itemList = []
  
  let getSKUcode = function(name, cat) {
    name = name.toUpperCase()
    cat = cat.toUpperCase()
    if(name.split(' ').length == 2 && name.split(' ')[0].length === 2) {
      name = name.slice(0,2) + name.split(' ')[1].slice(0) + cat.slice(0,2)
    } else {
      name = name.slice(0,3) + cat.slice(0,2)
    }
    return name
  }
  
  let checkValidInputs = function(name, cat, quant) {
    return (name.replace(/ /, '').length >= 5) && (cat.split(' ').length === 1 && cat.length >= 5) && (quant !== undefined)
  }
  
  return {
    create(...args) {
      if (checkValidInputs(...args)) {
        let item = { 
          SKU: getSKUcode(args[0], args[1]),
          name: args[0],
          category: args[1],
          quantity: args[2]
        }
        
        itemList.push(item)
        console.log(itemList)
        return 'valid item'
      }
    },
    
    items: itemList,
    
    update(skuCode, quantObj) {
      itemList.forEach(obj => {
        if (obj.SKU === skuCode) {
          Object.keys(quantObj).forEach(key => obj[key] = quantObj[key])
        }
      })
    },
    
    inStock() {
      return itemList.filter(obj => obj.quantity > 0) 
    },
    
    itemsInCategory(cat) {
      return itemList.filter(obj => obj.category === cat)
    },
    
    delete(skuCode) {
      let index = itemList.findIndex(obj => obj.SKU === skuCode)
      itemList.splice(index, 1)
    }
  }
  
})()


const ReportManager = {
  init(itemManager) {
    this.items = itemManager.items
    this.itemManager = itemManager
  },
  
  reportInStock() {
    console.log(this.itemManager.inStock().map(obj => obj.name).join(', '))
  },
  
  createReporter(skuCode) {
    let context = this
    return {
      itemInfo() {
        let selectedObj = context.items.filter(obj => obj.SKU === skuCode).pop()
        let keys = Object.keys(selectedObj)
        keys.forEach(key => {
          console.log(`${key}: ${selectedObj[key]}`)
        })
      }
    }
  }
}

console.log(ItemManager.create('basket ball', 'sports', 0));           // valid item
console.log(ItemManager.create('asd', 'sports', 0));
console.log(ItemManager.create('soccer ball', 'sports', 5));           // valid item
console.log(ItemManager.create('football', 'sports'));
console.log(ItemManager.create('football', 'sports', 3));              // valid item
console.log(ItemManager.create('kitchen pot', 'cooking items', 0));
console.log(ItemManager.create('kitchen pot', 'cooking', 3));          // valid item

console.log(ItemManager.items);       
// // returns list with the 4 valid items

// // Item manager appears to be an object that create objects and stoes them. Item manager should keep the items private


ReportManager.init(ItemManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// // // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// // // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
```