/* A grocery store uses a JavaScript function to calculate discounts on various items. 
They are testing out various percentage discounts but are getting unexpected results. 
Go over the code, and identify the reason why they aren't getting the expected 
discounted prices from the function. Then, modify the code so that it produces 
the correct results.

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = (this.price * percent) / 100;
    this.price -= discount;

    return this.price;
  },
};

console.log(item.discount(20))   // should return 40
40
console.log(item.discount(50))   // should return 25
20
console.log(item.discount(25))   // should return 37.5
15

The reason the above does not output the expected results is because the each time the object has the discount method invoked upon it, it permanetly mutates the value of price, thereby altering the numbers that are used in the discount operation. 

The option to solve this problem so to ensure that the value of the price property is not mutated on line 14 each time the method is invoked. 

Replace the above with the below: 
*/

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = (this.price * percent) / 100;
    let result = this.price - discount;

    return result;
  },
};

console.log(item.discount(20))   //
// 40
console.log(item.discount(50))   // 
// 25
console.log(item.discount(25))   // 
// 37.5
