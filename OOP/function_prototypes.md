### Question:
What happens when a function is used as a constructor?

### Answer:
When a function is used as a constructor, it is given a property called `prototype` as default. The purpose of this `prototype` property is to store a functions data and behaviours. This `prototype` property is where any objects that are instantiated/created from the function will have their dunder_proto set to. This allows any object created from the function to inherit the function`s set data and behaviours.

### Question: 
What does the `prototype` property of a function point to?

### Answer:
When an object is instantiated from a function, the functions `prototype` property is set to `this` which references the newly created object. 

### Question:
What is the correct term for sharing behaviours and data using the constructor's `prototype` property?

### Answer:
Prototype Pattern

### Question:
What is the problem when assigning a method to an object that is returned by a function constructor? 

### Answer:
It can be a inefficient use of memory as every object that is instantiated from the constuctor function creates a its own version of the same method. This isn't a problem when only a few objects are instatiated a constructor function but if thousands of objects are instantiated from the same function, each carrying their own version of the same function, it can be needless and inefficent way of taking up memory. 


### Question:
How can the above problem be resolved? 

### Answer:
One way to resolve this issue is to use the constructor function's `prototype` property to store a value or method. This means that if the function is not found in the calling object, javascript will search the constructor funtion's `prototype` property to find and execute the method. This process of storing methods not in the isntantiated object's themselves but in the constructor function's `prototype` property is called **delegation** 


### Question: 
How does Javascript know where to look if can't find a method in the calling object? 

### Answer:
When a new object is created by the constructor function, it's dunder_proto is automatically set to reference the constructor function's `prototype` property. This means that when Javascript cannot find the property that has been called on the object, it automatically checks the dunder_proto of the calling object which is referencing the constructor functions `prototype` property which, in itself, is referencing an object containing all properties that are also accessible to the calling object. If Javascript finds the property here, it invokes it. Else, it continues up the prototypcal chain checking each dunder_proto to `prototype` relationship until the property is discovered. Otherwise, it returns `undefined`. 

### Question:
Does Javascript always create a `prototype` property for every function ?

### Answer:
No. It only creates the `prototype` function is the `new` keyword is used. 

### Question:
Can an object overide the properties that are contained within the constuctor function's `prototype` property?

### Answer:
Yes, it can. Javascript always checks the calling object first before checking the dunder_proto of the calling object. If the property already exists locally within the scope of the object then it is returned. Else, the Javascript works up the prototypcal chain of dunder_proto or `prototype` properties until it finds the property its looking for. 