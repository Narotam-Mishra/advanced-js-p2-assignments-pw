
/*

Create an object constructor Person that takes name and age as parameter and initializes them. Also add a method sayHello() to greet the person

*/

// Define the Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add the sayHello method to the Person prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create a new instance of Person
let person1 = new Person("John", 30);

// Call the sayHello method
person1.sayHello();
  