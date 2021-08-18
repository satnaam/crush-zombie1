const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,bridge,leftwall,rightwall

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground=new Base(0,height-10,width*2,20);
leftwall=new Base(300,height/2+50,600,100);
rightwall=new Base(width-300,height/2+50,600,100);
 bridge=new Bridge(15,{x:width/2-200,y:height/2+115});
 jointpoint=new Base(width-400,height/2+115,40,20);
 Matter .Composite.add(bridge.body,jointpoint);
 jointlink=new Link(bridge,jointpoint)
}

function draw() {
  background(51);
  Engine.update(engine);
ground.show();
leftwall.show();
rightwall.show();
bridge.show();
}
