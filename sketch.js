var tower,tower1,door,door1,doorGroup,climber,climber1,climberGroup,ghost,
    ghost1;
var gamestate="play"

function preload(){
  tower1=loadImage("tower.png")
  ghost1=loadImage("ghost1.png")
  climber1=loadImage("climber.png")
  door1=loadImage("door.png")
}
function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300);
  tower.addImage(tower1);
  tower.velocityY=1
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghost1);
  ghost.scale=0.3;
  
  climberGroup=new Group();
   doorGroup=new Group();
}
function draw(){
background(0);
  if(gamestate==="play"){
    
  
  if(tower.y>400){
    tower.y=300
  }
  if(keyDown("left")){
    ghost.x=ghost.x-3
  }
  if(keyDown("right")){
    ghost.x=ghost.x+3
  }
  createdoor();
    if(climberGroup.isTouching(ghost)){
      ghost.velocityY=0
      ghost.destroy();
      gamestate="end"
    }
  drawSprites();
  }
  if(gamestate==="end"){
    stroke("yellow")
    fill("yellow")
    textSize(30)
    text("GameOver",230,250)
    
  }
  
}
function createdoor(){
  if(frameCount%240===0){
    door=createSprite(200,-50)
    climber=createSprite(200,10)
    door.x=Math.round(random(120,400));
    climber.x=door.x
    door.addImage(door1);
    climber.addImage(climber1)
    door.velocityY=1
    climber.velocityY=1
    door.lifetime=800
    climber.lifetime=800
    ghost.depth=door.depth
    ghost.depth+=1
    doorGroup.add(door)
    climberGroup.add(climber)
    
}
}