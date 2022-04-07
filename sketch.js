
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var chao
var w1
var w2
var btn1,btn2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var ball_options = {
	restitution: 0.10
 }

 var chao_options = {
	isStatic :true
 }
 

 
 chao = Bodies.rectangle(400,600,800,20,chao_options)
World.add(world,chao)

w1 = Bodies.rectangle(790,550,10,80,chao_options)
World.add(world,chao)

w2 = Bodies.rectangle(620,550,10,80,chao_options)
World.add(world,chao)
 
ball = Bodies.circle(100,200,25,ball_options)
World.add(world,ball)  

btn1 = createImg("right.png")
btn1.position(700,30)
btn1.size(50,50)
btn1.mouseClicked(ForceX)

btn2 = createImg("up.png")
btn2.position(20,30)
btn2.size(50,50)
btn2.mouseClicked(ForceY)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  fill("wither")
  rect(chao.position.x,chao.position.y,800,40);
  
  rect(w1.position.x,w1.position.y,10,80);

  ellipse(ball.position.x,ball.position.y,25)

  rect(w2.position.x,w2.position.y,10,80);
  drawSprites();
  
 
}

function ForceX(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.08,y:0})
}

function ForceY(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5})
}



