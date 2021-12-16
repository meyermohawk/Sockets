var socket;

function setup() {
  createCanvas(400, 400);
  background(51);
  
  socket = io.connect('http://127.0.0.1:3000')
  socket.on('mouse', newDrawing)
}
function newDrawing(data) {
  noStroke();
  fill(255, 0 , 100);
  ellipse(data.x, data.y, 24, 24);
}


function mouseDragged() {
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 24, 24);
  
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);
}


function draw() {

}