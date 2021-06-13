var iss,spacecraft;
var bg,issimg,scimg
var hasdocked=false
function preload() {
  bg=loadImage("spacebg.jpg")
  issimg=loadImage("iss.png")
  scimg=loadImage("spacecraft1.png")
  scimg1=loadImage("spacecraft2.png")
  scimg2=loadImage("spacecraft3.png")
  scimg3=loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  spacecraft= createSprite(285, 240, 50, 50);
  spacecraft.addImage(scimg)
  spacecraft.scale=0.18

  iss= createSprite(330, 130, 50, 50);
  iss.addImage(issimg)
  iss.scale=0.40
}

function draw() {
  background(bg);  
  if(!hasdocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y+=2
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x-=2
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x+=2
    }
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
     hasdocked=true
     textSize(25)
     fill("#ffffff")
     text("docking succesfull",200,300)
  }
  drawSprites();
}