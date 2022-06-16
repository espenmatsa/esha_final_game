const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg,bgImg;
var brick, drone;
var ground;
var invisibleGround1, invisibleGround2;


let engine;
let world;


function preload(){
  

  brickImg = loadImage("assets/brick_4.png");

  bgImg = loadImage("assets/background_2.gif");

  droneImg = loadImage("assets/drone.png");

  ropeImg = loadImage("assets/rope.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  invisibleGround1 = createSprite(1100, 10, 30, 2600);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(4900, 10, 30, 2600);
  invisibleGround2.visible = false;



  //creating the brick sprite
  brick = createSprite(4000, 850, 50, 50);
  brick.addImage(brickImg)
  brick.scale = 1.3;
  brick.velocityX = -6;

  //creating the drone sprite
  drone = createSprite(4000, 220, 50, 50);
  drone.addImage(droneImg);
  drone.scale = 1.4;
  drone.velocityX = -6;

  brick.x = drone.x

  //creating the rope sprite
  rope = createSprite(4000, 500, 600, 50);
  rope.addImage(ropeImg);
  rope.scale = 0.5;
  rope.velocityX = -6;
  //rope.x = drone.x

  


  //rope = new Rope()

  //Matter.Composite.add(Rope.body, drone);
}

function draw() {
  Engine.update(engine);
  background(bgImg);
  
  //ground.show();
  drone.bounceOff(invisibleGround1);
  drone.bounceOff(invisibleGround2);
  brick.bounceOff(invisibleGround1);
  brick.bounceOff(invisibleGround2);
  rope.bounceOff(invisibleGround1);
  rope.bounceOff(invisibleGround2);

  drone.collide(rope);
  drone.collide(brick);
  drawSprites();
}

