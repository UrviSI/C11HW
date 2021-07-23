var runner, runnerimp;
var groundImage;

function preload(){
  
  runnerimp = loadAnimation("Runner-1.png","Runner-2.png");
  groundImage = loadImage("path.png")
}

function setup(){

  createCanvas(400,400);
  ground = createSprite(200,200, 600, 10)
  ground.addImage(groundImage)
  ground.velocityY = -5

  runner = createSprite(50,160,20,50);
  runner.addAnimation("running", runnerimp);
  leftb = createSprite(0,200,20,400);
  rightb = createSprite(400,200,20,400);

  leftb.visible = false
  rightb.visible = false

  ground.scale = 1.2;
  runner.scale = 0.05
}


function draw(){

  background("black");

  if (ground.y<=400){
    ground.y = ground.height/2
  }
  runner.x = World.mouseX
  runner.collide(leftb)
  runner.collide(rightb)
  drawSprites();
}