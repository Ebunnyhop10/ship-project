var sea
var ship
var seaIMG
var seaImg1

function preload(){
  seaIMG = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
    sea = createSprite(200,200,400,400);
    sea.addImage("sea",seaIMG);
    sea.scale = 0.5;

    ship = createSprite(150,300,10,10);
    ship.addAnimation("ship",shipImg1);
    ship.scale = 0.2
}

function draw() {
  background("white");
 
   sea.velocityX = -0.5;

 if(sea.x < 0){
   sea.x = sea.with/1;
 }

 drawSprites();
}