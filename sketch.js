
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var block1,block2,block3,block4,block5,block6,block7,block8;
var ground;
var shot,slingShot;
var speed;
var score=0;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

text("Score:"+score,750,40)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
     block1 = new Hexagon(330,235,30,40);
  block2 = new Hexagon(326,235,30,40);
  block3 = new Hexagon(390,235,30,40);
  block4 = new Hexagon(420,235,30,40);
block5 = new Hexagon(450,235,30,40);
block6 = new Hexagon(360,195,30,40);
block7 = new Hexagon(390,195,30,40);
 block8 = new Hexagon(420,195,30,40);
  ground = new Ground (400,440,300,20);
 shot = new Shot(195,195,30,40);
 slingShot = new SlingShot(shot.body,{x:200,y:100});


 block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();

}


function draw() {
  rectMode(CENTER);
  background(200);
  block1.display();
  block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
ground.display();
shot.display();
 slingShot.display();  




block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();

drawSprites();
}
function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
   }

function mouseReleased() {
    slingShot.fly();
}



function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
   }

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=600 && hour<=1800){
       background("green");
    }
    else{
      background("blue");
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}