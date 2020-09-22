
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,box1,box2,box3,paper;
var dustbinImg;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);
	paper = new Paper(100,690);
	box1 = new Dustbin(600,680,200,20);
	box2 = new Dustbin(500,550,20,250);
	box3= new Dustbin(700,550,20,250);

	Engine.run(engine);
  
}
function draw() {
  Engine.update(engine);
  background(255);
  
  imageMode(CENTER);
  image(dustbinImg,100,50,20,20);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-900});
	}
}



