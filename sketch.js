const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var btn1,btn2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
   
  var ball_options={
    restitution: 0.4

  }
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)


  btn1 = createImg("right.png")
  btn1.position(200,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)

  btn2 = createImg("up.png")
  btn2.position(20,30)
  btn2.size(50,50)
  
  btn2.mouseClicked(hForce)
 

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20)
}

function hForce(){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}

