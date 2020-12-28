
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1,rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(80,640,50)

ground1 = new Ground(600,height,1200,70)

rect1=new dustbin(500,660,140,20)
rect2=new dustbin(420,600,20,130)
rect3=new dustbin(580,600,20,130)

	Engine.run(engine);
  
}


function draw() {

	

  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  rect1.display();
  rect2.display();
  rect3.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:-85});
    
	}
}



