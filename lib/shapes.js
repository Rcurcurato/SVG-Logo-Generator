class shape { }

//circle
class Circle extends Shape {
    render() {
        return <circle cx="25" cy="75" r="20" />
    }
}
//square
class Square extends Shape {
    render() {
        return <rect width="100" height="100" />
    }
}
//triangle
class Triange extends Shape {
    render() {
        return <polygon points="0,100 50,25 50,75 100,0" />
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
};
