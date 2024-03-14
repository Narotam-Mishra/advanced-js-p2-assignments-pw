
/*

Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
the draw method. Demonstrate polymorphism using instances of these classes.

*/

// Define the Shape base class as template
class Shape {
  constructor() {
    this.type = "Shape";
  }

  // Method to draw the shape (base implementation)
  draw() {
    console.log(`Drawing a ${this.type}`);
  }
}

// Define the Circle subclass extending Shape
class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "Circle";
    this.radius = radius;
  }

  // Override the draw method for Circle
  draw() {
    console.log(`Drawing a ${this.type} with radius ${this.radius}`);
  }
}

// Define the Rectangle subclass extending Shape
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.type = "Rectangle";
    this.width = width;
    this.height = height;
  }

  // Override the draw method for Rectangle
  draw() {
    console.log(`Drawing a ${this.type} with width ${this.width} and height ${this.height}`);
  }
}

// Create instances of Circle and Rectangle
let circle = new Circle(5);
let rectangle = new Rectangle(10, 8);

// using polymorphism by calling the draw method
circle.draw();
rectangle.draw();

// using Polymorphism 
let shapes = [new Circle(3), new Rectangle(7, 4)];
shapes.forEach((shape) => shape.draw());
  