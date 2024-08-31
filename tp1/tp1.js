let imagen, CuadX, CuadY, c1, c2, c3, c4, c5, c6, col;
function preload() {
  imagen= loadImage("data/ilusion.png");
}

function setup() {
  createCanvas(800, 400);
  background(127);
  CuadX= 10;
  CuadY=39;
  col=0;
  c1=255;
  c2=255;
  c3=255;
  c4=0;
  c5=0;
  c6=0;
}

function draw() {
push();
  translate(400, 0);

  for (let i=0; i<CuadX; i++) {
    for (let y=0; y<=CuadY; y++) {
      if ((i+y)%2==0) {
        fill(c1, c2, c3);
      } else {
        fill(c4, c5, c6);
      }
      rect(i*40, y*10, 40, 9);
    }
  }
  if (col==0) {

    c1=255;
    c2=255;
    c3=255;
    c4=0;
    c5=0;
    c6=0;
  } else if (col==1) {
    c1=0;
    c2=105;
    c3=255;
    c4=255;
    c5=0;
    c6=0;
  } else   if (col==2) {
    c1=255;
    c2=235;
    c3=46;
    c4=141;
    c5=135;
    c6=180;
  }
  pop();

  CuadradoMedio();
  image(imagen, 0, 0, 400, 400);

}
