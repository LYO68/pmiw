class Pantallas{
  constructor(){
    this.pantallas = 0;
  }
  
  pantallaInicial(){
  if (this.pantallas == 0 && juegoIniciado == false){
    push();
    rectMode(CENTER,CENTER);
    fill(255,50);
    rect(width/2,height*0.75,150,230,10);
    pop();
    
    //botones
    push();
    rectMode(CENTER,CENTER);
    fill(255,255,255);
    rect(width/2,300,140,40,20)
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0);
    text("Jugar",width/2,300);
    pop();
    
    push();
    rectMode(CENTER,CENTER);
    fill(255,255,255);
    rect(width/2,360,140,40,20)
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0);
    text("Creditos",width/2,360);
    pop();
    
    
    push();
    rectMode(CENTER,CENTER);
    fill(255,255,255);
    rect(width/2,420,140,40,20)
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0);
    text("Controles",width/2,420);
    pop();
  }
}
pantallaCreditos(){
  if (this.pantallas == 1){
    this.botonAtras();
    push();
    rectMode(CENTER,CENTER);
    fill(255,50);
    rect(width/2,height/2,300,200,10);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Creado por:",width/2,170);
    text("Lautaro Oviedo:",width/2,220);
    text("Manuel Perez:",width/2,270);
    pop();
  
  }

}
pantallaControles(){
  if (this.pantallas == 2){
    this.botonAtras()
    push();
    rectMode(CENTER,CENTER);
    fill(255,50);
    rect(width/2,height/2,500,200,10);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Controles:",width/2,170);
    text("Barra espaciadora para aumentar la potencia de grito",width/2,220);
    text("M para ejecutar el grito",width/2,270);
    text("R para reiniciar el juego",width/2,320);
    pop();
  }

}
botonAtras(){
  if(this.pantallas == 1 || this.pantallas == 2 || this.pantallas == 3){
    if(juegoIniciado == false){
      push();
      rectMode(CENTER,CENTER);
      fill(255,255,255);
      rect(50,50,100,40,20);
      textAlign(CENTER,CENTER);
      textSize(20);
      fill(0);
      text("Atras",50,50);
      pop();
    }
  }
}
ejecucionDePantallas(){

  this.pantallaInicial();
  this.pantallaCreditos();
  this.pantallaControles();
  this.botonAtras();
}
botones(){
  if(this.pantallas == 0 && mouseX > 250 && mouseY > 280 && mouseX < 370 && mouseY < 320){
      juegoIniciado = true;
      this.pantallas = 3
      sonido[2].stop();
    }
    if(this.pantallas == 0 && mouseX > 250 && mouseY > 340 && mouseX < 370 && mouseY < 380){
      this.pantallas = 1;
    }
    if(this.pantallas == 0 && mouseX > 250 && mouseY > 400 && mouseX < 370 && mouseY < 440){
      this.pantallas = 2;
    }
    if (this.pantallas == 1 || this.pantallas == 2){
      if (mouseX > 0 && mouseY > 30 && mouseX < 100 && mouseY < 70){
        this.pantallas = 0;
        imagenPantallas = loadImage("data/imagenes/imagenFondo.png");
        juegoIniciado = false;
        this.ejecucionDePantallas();
    }
  }
}
}
