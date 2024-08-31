function mousePressed() {
  if (mouseX>400 && mouseX<800) {
    if (col==0) {
      col=1;
    } else if (col==1) {
      col=2;
    } else if (col<=3) {
      col=0;
    }
  }
}
function keyPressed(){
if (key == 'w') {
    c1= ColorTecla();
    c2= ColorTecla();
    c3=ColorTecla();
  
  }
  
  

}
