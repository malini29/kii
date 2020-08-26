class Hexagon {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.Visiblity = 255;
  }
   score(){
  if (this.Visiblity<0 && this.Visiblity >-105) {
    score++;
  }
   }
  display(){
   
    
    var pos =this.body.position;
    var angle = this.body.angle;
    if (this.body.speed>3) {  

    }

 else{


 
    push();
   
  //mage(this.body.Hexagon,this.body.position.x,this.body.position.y,50,50);
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("yellow");
    fill(255);
    rect(0, 0, this.width, this.height);
     this.Visiblity = this.Visiblity - 1;
  tint (255,this.Visiblity);
    pop();
  }
  }
};
