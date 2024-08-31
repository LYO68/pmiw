function CuadradoMedio() {
  let forx, fory, color1, color2, color3, color4, color5, color6;
  forx=24;
  fory=6;
  color1=0;
  color2=0;
  color3=0;
  color4=200;
  color5=200;
  color6=200;

  push();
  translate(400, 0);
  if (col==0) {
    if (mouseX>480 && mouseX<720 && mouseY>90 && mouseY<340) {

      color4=255;
      color5=255;
      color6=255;
    }
  } else if (col==1) {
    
    color1=200;
    color2=200;
    color3=200;
    color4=0;
    color5=0;
    color6=0;
    if (mouseX>480 && mouseX<720 && mouseY>90 && mouseY<340) {

      color1=255;
      color2=255;
      color3=255;
    }
  } else   if (col==2) {

    color1=0;
    color2=90;
    color3=200 ;
    color4=200;
    color5=0;
    color6=0;
    if (mouseX>480 && mouseX<720 && mouseY>90 && mouseY<340) {

      color1=0;
      color2=105;
      color3=255;
      color4=255;
    }
  }


  for (let i=0; i<forx; i++) {
    for (let y=0; y<=fory; y++) {
      if ((i+y)%2==0) {
        fill(color1, color2, color3);
      } else {
        fill(color4, color5, color6);
      }

      rect(i*10+80, y*35.8+89.5, 10, 35.8);
    }
  }


  pop();
}
