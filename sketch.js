var bullet, wall, thickness;
var speed, weight;
var rightedge, leftedge;
function setup() {
  createCanvas(1600,400);

thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  wall = createSprite(1200, 200, thickness, 200);
  bullet = createSprite(50, 200, 50, 15);
  bullet.velocityX = speed;
  }

function draw() {
  wall.shapeColor = color(80, 80, 80);
  background(35,255,230);  
bullet.shapeColor = color(255);

  if(collided(bullet, wall)){
    var damage = 0.5 *speed*speed*weight/(thickness * thickness * thickness);
    bullet.velocityX = 0;
  }
  
textSize(40);
  if(damage<10){
    wall.shapeColor =color(0, 255, 0);
    fill("green");
    text("Wall Approved !!", 550, 200);
    text("Damage  " + Math.round(damage), 600, 250);
   }

 if(damage>10){
    wall.shapeColor =color(255, 0, 0);
    fill("red");
    text("Wall Disapproved !!", 550, 200);
    text("Damage  " + Math.round(damage), 600, 250);
   }

  drawSprites();
}
function collided (bullet, wall) {
    rightedge=bullet.x+bullet.width;
    leftedge = wall.x

    if(rightedge>=leftedge){
      return true;
    }
    return false;

}
