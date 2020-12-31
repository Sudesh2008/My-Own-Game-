var batman, batmanImage;
var bg;
var bat, batImage;


function preload(){
  
  batmanImage = loadAnimation("b1.png","b2.png","b3.png","b4.png");
  bg = loadImage("Bg.png");
  batImage = loadAnimation("bat1.png","bat2.png","bat3.png","bat4.png");
  
}

function setup() {
  createCanvas(800,400);
  batman = createSprite(250,350,30,30);
  batman.addAnimation("batman",batmanImage);
 
}

function draw() {
  background(bg);  

  if(keyDown("right")){
    batman.x = batman.x + 5;
  }

  if(keyDown("left")){
    batman.x = batman.x -5;
  }




  drawSprites();
}