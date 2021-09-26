var dora1,backgroundimg,dora1ani,background1,mouse,mouseani



function preload() {
backgroundimg=loadImage("images/city.png")
dora1ani=loadAnimation("images/DORE1.png","images/DORE2.png","images/DORE3.png","images/DORE4.png","images/DORE5.png","images/DORE6.png")
 mouseani=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png","images/mouse5.png","images/mouse6.png","images/mouse7.png") 
}
function setup(){
 
  createCanvas(1300,550);
  
  background1=createSprite(650,275)
  background1.addImage(backgroundimg)
  background1.scale=1.4
  dora1=createSprite(100,470)
  dora1.addAnimation("doraami",dora1ani)
  dora1.scale=2


 
}

function draw(){
 // background(backgroundimg);
 background1.velocityX=-4
 if(background1.x<0){
   background1.x=650
 }
  spawnMouse();
   
    drawSprites();
  
}
function spawnMouse() {
  if(frameCount%100===0){
    mouse=createSprite(1350,470)
    mouse.addAnimation("mouse",mouseani);
    mouse.velocityX=-4
    mouse.scale=0.5
  }
  
}




