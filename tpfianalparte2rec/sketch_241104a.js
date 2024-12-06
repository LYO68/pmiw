//VIDEO
//https://youtu.be/NRtrMhWsuds

let objJuego;
let juegoIniciado = false;
let imagenPantallas;
let sonido = [];

function preload(){
  sonido[1] = loadSound("data/audio/sonidoPerder.mp3");
  sonido[2] = loadSound("data/audio/musica.mp3");
  sonido[0] = loadSound("data/audio/grito.mp3");
  
}
function setup() {
  frameRate(20);
  createCanvas(640,480); 
  objJuego = new Juego();
  imagenPantallas = loadImage("data/imagenes/imagenFondo.png");
  sonido[2].play();
}
function draw(){
  
  image(imagenPantallas,0,0,width,height);
  
  objJuego.dibujarPantalla();
  
  if (juegoIniciado == true){
    objJuego.funcionesConstantes();
  }
  
  objJuego.dibujarMensaje();
}

function keyPressed(){
  
  if (key == ' '){
    if(juegoIniciado == true){
      for(let i = 0; i < 10; i++){
        objJuego.aumentarCarga();
      }
    }
  }
  if(key == 'm'){
    objJuego.chequeoDeValor();
  }
  if(key == "r"){
    objJuego.pantalla.pantallas = 0;
    imagenPantallas = loadImage("data/imagenes/imagenFondo.png");
    juegoIniciado = false;
    objJuego.estadoDeJuego = false;
    objJuego.personaje.carga = 0;
  }  
}
function mousePressed(){
  objJuego.Botones();
}
