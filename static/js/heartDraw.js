var A=16;
var B=-13;
var C=5;
var R = 60;
const xh = (angle, A) => (R / 15.0 * A * Math.pow(Math.sin(angle), 3));
const yh = (p, B, C) => R / 15.0 * (B * Math.cos(p) + C * Math.cos(2 * p) + 2 * Math.cos(3 * p) + Math.cos(4 * p));
function setup() {
    var width = $(".row > div ").width();
    console.log('width ' + width);
    if(width <= 575)
        width = 200
    let c = createCanvas(width, width);
    background('White');
    
}
function draw() {
    
    background('white');
    fill('red');
    stroke('red');
    strokeWeight(4);
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
        width = 500
    resizeCanvas(width, width);
}


function saveImage() {
    createImage(10, 10);
    // createCanvas(width, width);
    // background('white');
    // fill('red');
    // stroke('red');
    // strokeWeight(4);
    // copy(canvas);
    var currentTimeMillis = new Date().getTime().toString();
    console.log((currentTimeMillis));
    // var path = window.location.pathname;
    // path = path.split('main.html')[0];
    // console.log(path);
    //var path = 'C:/Users/SEASON/Downloads/heart-equation-main/';
    //var fname = path +  currentTimeMillis
    //console.log(fname)
    saveCanvas(currentTimeMillis, 'png');
    return currentTimeMillis
}