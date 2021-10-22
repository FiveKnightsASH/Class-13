var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage;

var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score = 0;






function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
}

function setup() {

  createCanvas(600,200);
  console.log("Hello " + "Neel");

  
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(180);

  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 500, 50);
  
  var r = Math.round(random(1,6));
  //console.log(frameCount);
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 161) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.7
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnObstacles();
  spawnClouds();
  drawSprites();
  
}


function spawnClouds(){
  //Add instructions to make clouds
  if(frameCount % 80 == 0){
    var cloud = createSprite(600, 100, 30, 20);
    cloud.velocityX = -3;
    cloud.addImage(cloudImage);
    cloud.scale = 0.7;
    cloud.y = Math.round(random(50,100));

    //console.log(trex.depth);
    //console.log(cloud.depth);

    trex.depth = cloud.depth +1;

    cloud.lifetime = 210;

  }
  

}

function spawnObstacles(){
  if(frameCount %100 ==0){
    var obstacle = createSprite(600, 170, 30, 40);
    obstacle.velocityX = -4;

    var num = Math.round(random(1,6));

    switch(num){

      case 1:
        obstacle.addImage(obstacle1);
        break;

     case 2:
      obstacle.addImage(obstacle2);
      break;


    case 3:
      obstacle.addImage(obstacle3);
      break;


    case 4:
      obstacle.addImage(obstacle4);
      break;


    case 5:
      obstacle.addImage(obstacle5);
      break;

    case 6:
      obstacle.addImage(obstacle6);
      break;

    default:
      break;

    }

    obstacle.scale = 0.5;
  }

}



