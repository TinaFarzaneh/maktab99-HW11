class Shape {
  #shapeName;
  constructor(shapeName) {
    this.#shapeName = shapeName;
  }

  get shapeName() {
    return this.#shapeName;
  }

  set shapeName(name) {
    this.#shapeName = name;
  }

  calcArea() {}

  calcPerimeter() {}
}

class Polygon extends Shape {
  #width;
  #height;
  constructor(width, height) {
    super(width, height);
    this.#width = width;
    this.#height = height;
  }
  get width() {
    return this.#width;
  }

  set width(width) {
    this.#width = width;
  }

  get height() {
    return this.#height;
  }

  set height(height) {
    this.#height = height;
  }
  calcArea() {
    return this.#width * this.#height;
  }

  calcPerimeter() {
    return 2 * (this.#width + this.#height);
  }
}

class NonPolygon extends Shape {
  #radius;
  constructor(radius) {
    super(radius);
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(newRadius) {
    this.#radius = newRadius;
  }

  calcArea() {
    return Math.PI * this.#radius * this.#radius;
  }

  calcPerimeter() {
    return 2 * Math.PI * this.#radius;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super(width, height);
    this.shapeName = "Rectangle";
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.shapeName = "Square";
  }
}

class Circle extends NonPolygon {
  constructor(radius) {
    super(radius);
    this.shapeName = "Circle";
  }
}

class Cylinder extends Circle {
  #height;
  #radius;
  constructor(radius, height) {
    super(radius, height);
    this.#radius = radius;
    this.#height = height;
    this.shapeName = "Cylinder";
  }

  calcArea() {
    const ceilFloorArea = super.calcArea();
    const aroundArea = 2 * Math.PI * this.#radius * this.#height;
    return 2 * ceilFloorArea + aroundArea;
  }

  calcPerimeter() {
    return 2 * Math.PI * this.#radius + 2 * this.#height;
  }
}

const rectangle = new Rectangle(6, 12);
console.log(rectangle.shapeName);
console.log(rectangle.calcArea());
console.log(rectangle.calcPerimeter());

const square = new Square(9);
console.log(square.shapeName);
console.log(square.calcArea());
console.log(square.calcPerimeter());

const circle = new Circle(5);
console.log(circle.shapeName);
console.log(circle.calcArea());
console.log(circle.calcPerimeter());

const cylinder = new Cylinder(2, 5);
console.log(cylinder.shapeName);
console.log(cylinder.calcArea());
console.log(cylinder.calcPerimeter());
