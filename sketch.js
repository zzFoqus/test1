const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling1;
var polygon_img;
var box1,box2,box3,box4,box5,box5,box6,box7,box8,box9


function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  box1 = new Block(640,195,30,40);
  box2 = new Block(670,195,30,40);
  box3 = new Block(700,195,30,40);
  box4 = new Block(730,195,30,40);
  box5 = new Block(760,195,30,40);
  
  box6 = new Block(670,135,30,40);
  box7 = new Block(700,135,30,40);
  box8 = new Block(730,135,30,40);
  
  box9 = new Block(700,95,30,40);

  ball=Bodies.circle(100,200,20);
  World.add(world,ball)

  sling1= new SlingShot(this.ball,{x:100,y:200})
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();


  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  box6.display();
  box7.display();
  box8.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  box9.display();
  fill("grey");
  block16.display();

  sling1.display();
  imageMode(CENTER)
  image(polygon_img,ball.position.x,ball.position.y,40,40)

}

function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
  if(keyCode === 32){
     // slingshot.attach(bird.bdy);
  }
}

function mouseDragged(){

  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}