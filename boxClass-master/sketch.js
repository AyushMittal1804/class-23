const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;
var box3

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,50,50,"blue");
    box2 = new Box(240,100,50,100,"green");
    box3 = new Box (100,150,20,50,"yellow");
    ground = new Ground(200,380,400,20,"purple");
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   ground.display();
}