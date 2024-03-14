
/*

Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
within these methods such that method chaining of add, subtract, multiply and divide is possible.

*/

// Define the Calculator object with methods
let Calculator = {
  result: 0,

  // Method to add a number to the result
  add: function (num) {
    this.result += num;
    // Return 'this' to enable method chaining
    return this; 
  },

  // Method to subtract a number from the result
  subtract: function (num) {
    this.result -= num;
    return this; 
  },

  // Method to multiply the result by a number
  multiply: function (num) {
    this.result *= num;
    return this; 
  },

  // Method to divide the result by a number
  divide: function (num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      console.error("Division by zero is not allowed.");
    }
    return this;
  },

  // Method to get the current result
  getResult: function () {
    return this.result;
  },
};

// Demonstrate method chaining
let result = Calculator.add(15).multiply(2).subtract(8).divide(2).getResult();
console.log("Final Result:", result);
  