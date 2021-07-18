
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

  var ball_options={
    "restitution":0.3,
    "isStatic":false,
    friction:0,
    density:1.2
  }
  ball = Bodies.circle(100,500,50);
  World.add(world,ball);


	ground = new Ground(width/2,550,width,20);
	leftSide = new Ground(windowWidth-500,500,20,100);
	rightSide = new Ground(windowWidth-300,500,20,100);
  
   
	

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER)
  background("blue");
  


  ground.display()
  leftSide.display()
  rightSide.display()

  ellipse(ball.position.x,ball.position.y,50);

  if(keyDown("Up_ARROW")){
      
	Matter.Body.applyForce(ball,{x:500,y:600},{x:0.05,y:-0.09});
}

  drawSprites();
 
}


