var backgroundImg,bgImg2,bgImg3;


function preload(){
backgroundImg=loadImage('snow1.jpg')
bgImg2=loadImage('snow2.jpg');
bgImg3=loadImage('snow3.jpg')
}


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bgImg3);
  
  if(keyCode===56){
    background(bgImg2)
  }

  if(keyCode===55){
    background(backgroundImg)
  }


  drawSprites();
}