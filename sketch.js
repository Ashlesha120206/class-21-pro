var rect, rect1, rect2, rect3;
var bullet, bullet1, bullet2, bullet3, wall1, wall2, wall3;
var speed, weight;
var thickness;

function setup() {
  createCanvas(800,400);

  speed = random(5,10);
  weight = random(30,52);
  thickness = random(22,83);

  rect1 = createSprite(750,40,20,40);
  rect2 = createSprite(750,140,20,40);
  rect3 = createSprite(750,240,20,40);
  
 bullet1 = createSprite(40,40,30,15);
  bullet1.shapeColor = "blue";
  bullet2 = createSprite(40,140,30,15);
  bullet2.shapeColor = "blue";
  bullet3 = createSprite(40,240,30,15);
  bullet3.shapeColor = "blue";
  
  wall1 = createSprite(400,90,800,3);
  wall1.shapeColor = "white"; 
  wall2 = createSprite(400,190,800,3);
  wall2.shapeColor = "white";
  wall3 = createSprite(400,290,800,3);
  wall3.shapeColor = "white";
}

function draw() {
  background("black");  

if(keyDown("space")){
  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
}

  // if(rect1.x - bullet1.x < (bullet1.width + rect1.width)/2 && 
  //    rect2.x - bullet2.x < (bullet2.width + rect2.width)/2 &&
  //    rect3.x - bullet3.x < (bullet3.width + rect3.width)/2 ) {

  //  bullet1.velocityX = 0;
  //  bullet2.velocityX = 0;
  //  bullet3.velocityX = 0;

  //  var deformation = 0.5 * weight * speed * speed/22509;
   
  //   if(deformation > 180){
  //    bullet1.shapeColor = "red";
  //    bullet2.shapeColor = "red";
  //    bullet3.shapeColor = "red";
  //   }
  //     if(deformation < 180 && deformation > 100){
  //       bullet1.shapeColor = "yellow";
  //       bullet2.shapeColor = "yellow";
  //       bullet3.shapeColor = "yellow";
  //     }
  //       if(deformation < 100 ){
  //         bullet1.shapeColor = "green";
  //         bullet2.shapeColor = "green";
  //         bullet3.shapeColor = "green";
  //       }
  
  // }

  if(hasCollided(lbullet,lrect)){
    bullet1.velocityX = 0;
    bullet2.velocityX = 0;
    bullet3.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage > 10){
      rect1.shapeColor = "red";
      rect2.shapeColor = "red";
      rect3.shapeColor = "red";
    }
     if(damage < 10){
       rect1.shapeColor = "green";
       rect2.shapeColor = "green";
       rect3.shapeColor = "green";
     }
  }

  drawSprites();
}

function hasCollided(lbullet,lrect){
  if(lbullet.isTouching("lrect")){
    bullet1.velocityX = 0;
    bullet2.velocityX = 0;
    bullet3.velocityX = 0;
  }
  var lbullet = createSprite(40,340,30,15);
  var lrect = createSprite(750,340,20,40);
  bulletRightEdge = lbullet.x + lbullet.width;
  rectLeftEdge = lrect.x;
  if(bulletRightEdge >= rectLeftEdge)
  {
    return true
  }
    return false;
}