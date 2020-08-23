const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backGroundimg;

function preload(){

    backGroundimg=loadImage("sprites/bg.jpg")


}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    

    dustbin = new Dustbin(700,240,70,70);

   
    paper = new crumpledPaper(100,100);

}

function draw(){
    background(backGroundimg);
    Engine.update(engine);
 
	dustbin.display();

   
    paper.display();
}