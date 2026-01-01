//Grab the canvas element
const canvas = document.getElementById("sim-window");

//"Draw" on the canvas with ctx
const ctx = canvas.getContext("2d");

// Square properties
let square = {
    x: 100,   // horizontal position
    y: 50,    // vertical position
    size: 50, // width and height
    color: "blue"
};

// Draw the square
ctx.fillStyle = square.color;
ctx.fillRect(square.x, square.y, square.size, square.size);
