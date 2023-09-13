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

///////////////////
let form = document.querySelector("form");
let geometricshapes = document.getElementById("geometricshapes");
let width = document.getElementById("width");
let height = document.getElementById("height");
let radius = document.getElementById("radius");
let calculate = document.querySelector(".calc");
let perimeter = document.querySelector(".resultOfPerimeter");
let area = document.querySelector(".resultOfArea");

geometricshapes.addEventListener("change", function () {
  radius.disabled = true;
  width.disabled = true;
  height.disabled = true;

  let selected = geometricshapes.value;
  if (selected === "Circle") {
    radius.disabled = false;
    height.disabled = true;
    width.disabled = true;
  } else if (selected === "Square") {
    radius.disabled = true;
    width.disabled = false;
    height.disabled = true;
  } else if (selected === "Rectangle") {
    radius.disabled = true;
    width.disabled = false;
    height.disabled = false;
  } else if (selected === "Cylinder") {
    radius.disabled = false;
    height.disabled = false;
    width.disabled = true;
  } else {
    radius.disabled = false;
    height.disabled = false;
    width.disabled = false;
  }
});

function result(num1, num2) {
  area.textContent = num1.toFixed(1);
  perimeter.textContent = num2.toFixed(1);
}

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  if (geometricshapes.value === "Circle") {
    let circle = new Circle(Number(radius.value));
    result(circle.calcArea(), circle.calcPerimeter());
  } else if (geometricshapes.value === "Square") {
    let square = new Square(Number(width.value));
    result(square.calcArea(), square.calcPerimeter());
  } else if (geometricshapes.value === "Rectangle") {
    let rectangle = new Rectangle(Number(width.value), Number(height.value));
    result(rectangle.calcArea(), rectangle.calcPerimeter());
  } else if (geometricshapes.value === "Cylinder") {
    let cylinder = new Cylinder(Number(radius.value), Number(height.value));
    result(cylinder.calcArea(), cylinder.calcPerimeter());
  } else {
    alert("Select shape and Enter number:");
  }
});
