```js
function makeList() {
  let items = []
  return {
    add: function(args) {
          items.push(args)
          console.log(`${args} added!`)
         }, 
    list: function() {
            if (items.length === 0) {
               console.log('The list is empty.')
            } else {
              items.forEach(item => console.log(item))
            }
          },
    remove: function(args) {
              if (items.includes(args)) {
                items.splice(items.indexOf(args), 1)
                console.log(`${args} removed!`)
              }
            }
  }
}


let list = makeList();
list.add('peas');
// peas added!
list.list();
// // peas
list.add('corn');
// // corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// = corn
console.log(list.items) // undefined
```
