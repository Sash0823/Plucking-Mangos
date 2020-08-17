
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,chain;
var backgroundImg;
var mango, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box = new Box(700,320,70,70);
	mango = new Box();
    chain = new Chain(bird.body,log6.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box.display();
    mango.display();
    chain.display();    
}
