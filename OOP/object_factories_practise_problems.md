Consider the code below:

```js
let chile = {
  name: 'The Republic of Chile',
  continent: 'South America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let canada = {
  name: 'Canada',
  continent: 'North America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let southAfrica = {
  name: 'The Republic of South Africa',
  continent: 'Africa',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};
```

Think about what is necessary and unnecessary in this code. Where is there duplication?

### Answer:
Each country variable references an object that contains data on a country. However, each of these objects uses the same key value properties. To avoid duplication, it would be more efficient to create a function which takes the continent and name values and returns and object that contains the properties and behaviours each `country` variable needs. 



Given our observations about the code above, implement a factory function for our country objects following the template laid out below:
```js
let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."
```

### Answer:

```js
function makeCountry(name, continent) {
  return { name: name,
           continent: continent,
           getDescription() {
            return this.name + ' is located in ' + this.continent + '.';
          },
         }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."
```

We've decided that we want to track which countries we've visited, and which we haven't. Alter the factory function so that the object it returns includes a property visited with a value of false.

### Answer:

```js
function makeCountry(name, continent) {
  return { name: name,
           continent: continent,
           getDescription() {
            return this.name + ' is located in ' + this.continent + '.';
          },
           visited: false,
         }
}
```


This situation seems a bit problematic, though. Suppose we want to add a country that we've already visited. Alter the factory function to use an optional visited parameter with a default value of false.

### Answer:

```js
function makeCountry(name, continent, visited=false) {
  return { name,
           continent,
           getDescription() {
            return this.name + ' is located in ' + this.continent + '.';
          },
           visited,
         }
}
``` 

Let's add a method to our country objects that lets us visit them. Implement a method visitCountry that sets the visited property to true.

```js

function makeCountry(name, continent, visited=false) {
  return { name,
           continent,
           getDescription() {
            return this.name + ' is located in ' + this.continent + '.';
          },
           visited: visited,
           visitCountry() {
             this.visited = true
           },
         }
}
```

Finally, let's update our getDescription function to reflect the visited data. Assuming that canada.visited is false, your code should look like this:

### Answer:

```js
function makeCountry(name, continent, visited=false) {
  return { name,
           continent,
           visited: visited,
           visitCountry() {
             this.visited = true
           },
           getDescription() {
            let word = this.visited ? 'have' : "haven't"
            return this.name + ' is located in ' + this.continent + '. ' + `I ${word} visited ${name}.`;
          },
         }
}
```



### Final Code:

```js
function makeCountry(name, continent, visited=false) {
  return { name,
           continent,
           visited: visited,
           visitCountry() {
             this.visited = true
           },
           getDescription() {
            let word = this.visited ? 'have' : "haven't"
            return this.name + ' is located in ' + this.continent + '. ' + `I ${word} visited ${name}.`;
          },
         }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."


let unitedKingdom = makeCountry('The United Kingdom', 'Europe')
unitedKingdom.visitCountry()
console.log(unitedKingdom.getDescription())


console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."
``` 