var A=16;
var B=-13;
var C=5;
var R = 60;
const xh = (angle, A) => (R / 15.0 * A * Math.pow(Math.sin(angle), 3));
const yh = (p, B, C) => R / 15.0 * (B * Math.cos(p) + C * Math.cos(2 * p) + 2 * Math.cos(3 * p) + Math.cos(4 * p));
function setup() {
    var width = $(".row > div ").width();
    if(width <= 575)
        width = 200
    createCanvas(width, width);
    background('pink');
}
function draw() {
    background('#ffc0cb');
    fill('#E6007E');
    stroke(255);
    strokeWeight(3);
    beginShape();
    let n = 200;
    for (let i = 0; i < n; i++) {
        let x = width / 2 + xh((TAU * i / n),A);
        let y = height / 2 + yh((TAU * i / n), B, C);
        vertex(x, y);
    }
    endShape();
}

function windowResized() {
    var width = $(".row > div ").width();
    if(width <= 575)
        width = 200
    resizeCanvas(width, width);
}