const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground
var box,


function preload(){
	
}



function setup() {
	createCanvas(1200,800);
    background(0,0,0)
    engine = Engine.create();
    world = engine.world;

    //ground = new Ground(700,650,100, 20)

    box = new Box(320,100,20,35)

}


function draw() {
    Engine.update(engine);
    background(0)
    box.display()
    ground.display()   
}
  