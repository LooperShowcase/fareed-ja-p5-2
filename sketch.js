//let bg;
//let y = 0;

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  //bg = loadImage("download.png");
  createCanvas(700, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);

  background("Black");
  translate(width / 2, height / 2);
  rotate(-90);
  let sec = second();
  let min = minute();
  let hr = hour();
  noFill();
  strokeWeight(5);
  stroke("#3772FF");
  let secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  stroke("#3772FF");
  rotate(secondAngle);
  line(0, 0, 150, 0);
  pop();

  stroke("#2A2D34");
  let minuteAngle = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6);
  arc(0, 0, 250, 250, 0, minuteAngle);

  push();
  stroke("#2A2D34");
  rotate(minuteAngle);
  line(0, 0, 125, 0);
  pop();

  stroke("#E7E247");
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + map(min, 0, 60, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngle);

  push();
  stroke("#E7E247");
  rotate(hourAngle);
  line(0, 0, 100, 0);
  pop();

  push();
  stroke("#2A2D34");
  point(0, 0);
  strokeWeight(15);
  pop();

  strokeWeight(1);
  stroke("White");
  rotate(90);
  text("12", 0, -170);
  text("3", 170, 0);
  text("6", 0, 170);
  text("9", -170, 0);
  text(hr + " : " + min + " : " + sec, -25, -50);
}
