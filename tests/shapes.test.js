class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}
//circle
class Circle extends Shape {
    render() {
        <circle cx="25" cy="75" r="20"/>

    }
}
class Square extends Shape {
    render() {
        <rect width="100" height="100" />

    }
}
class Triange extends Shape {
    render() {
        <polygon points="0,100 50,25 50,75 100,0" />
    }
}
module.exports = Shape;