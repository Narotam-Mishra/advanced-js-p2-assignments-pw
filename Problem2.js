
/*

Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional property designation and a method getDetails() to display the employee details.

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

// Define the Employee constructor that inherits from Person
function Employee(name, age, designation) {
  // Call the Person constructor to initialize name and age
  Person.call(this, name, age);
  this.designation = designation;
}

// Inherit the Person prototype methods
Employee.prototype = Object.create(Person.prototype);

// Add the getDetails method to the Employee prototype
Employee.prototype.getDetails = function () {
  console.log(`Employee: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
};

// Create a new instance of Employee
let e1 = new Employee("Alice", 25, "Manager");

// Call the sayHello method inherited from Person
e1.sayHello();

// Call the getDetails method specific to Employee
e1.getDetails(); 
  