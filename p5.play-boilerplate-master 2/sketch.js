const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var engine 
var world 
var ball
var ground

function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world
var ground_options={
  isStatic:true
}
ground = Bodies.rectangle(0,390,800,20,ground_options)
World.add(world,ground)
var ball_options={
  restitution:1
}
ball = Bodies.circle(400,200,25,ball_options)
World.add(world,ball)

}

function draw() {

  
  background(123,255,255);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,800,20)
  ellipse(ball.position.x,ball.position.y,25,25)


  drawSprites();
}