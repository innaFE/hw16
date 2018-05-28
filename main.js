class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.x = initX;
        this.y = initY;
    }
    getColor() {
        return this.color;
    };
    setColor(val) {
        this.color = val
    };
    getCoords() {
        return `x: ${this.x}, y: ${this.y}`
    };
    moveTo(newX, newY) {
        this.x = newX;
        this.y = newY
    }
}

class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight) {
        super (color, initX, initY),
        this.width = initWidth,
        this.height = initHeight
    }
    setWidth(newWidth) {
        this.width = newWidth;
    };
    setHeight(newHeight) {
        this.height = newHeight;
    }
    getDims() {
        return `width: ${this.width}
    height: ${this.height}`
    }
    draw() {
        console.log(
            `Drawing a rectangle at
    ${this.getCoords()}
with dimensions:
    ${this.getDims()}
Filled with color: ${this.getColor()}`)
    }
}

class Circle extends Shape {
    constructor(color, initX, initY, initRadius) {
        super(color, initX, initY),
        this.radius = initRadius
    }
    getRadius() {
        return this.radius;
    };
    setRadius(val) {
        this.radius = val;
    }
    draw() {
        console.log(`Drawing a circle at
    ${this.getCoords()}
with dimensions:
    radius: ${this.getRadius()}
Filled with color: ${this.getColor()}`)
    }
}

let rectangle = new Rectangle('#000000', 20, 0, 200, 50);
rectangle.draw();
rectangle.setColor('#777777');
rectangle.moveTo(50, 30);
rectangle.setWidth(500);
rectangle.setHeight(200);
rectangle.draw();
let circle = new Circle('#757575', 30, 0, 500);
circle.draw();
circle.setColor('#afafaf');
circle.moveTo(20, 20);
circle.setRadius(1000);
circle.draw();