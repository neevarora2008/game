var PLAY = 1;
var END = 0
var gameState = PLAY;

var trex, trex_running, trex_collided;
var obstacleGroup, obstacle1, obstacle2,obstacle3,obstacle4, obstacle5, obstacle6

var score
var gameOverImh,restartImg
var jumpSound, checkPointSound, dieSound

function preload(){
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
    trex_collided = loadAnimation("trex_collided.png")

    cloudImage = loadImage("cloud.png")

    groundImage = loadImage("ground2.png")

 obstacle1 = loadImage("obstacle1.png");
 obstacle2 = loadImage("obstacle2.png");
 obstacle3 = loadImage("obstacle3.png");
 obstacle4 = loadImage("obstacle4.png");
 obstacle5 = loadImage("obstacle5.png");
 obstacle6 = loadImage("obstacle6.png");

restartImg = loadImage("restart.png")
gameOverImg = loadImage("gameOver.png")

jumpSound = loadSound("jump.mp3")
dieSound = loadSound("die.mp3")
checkPointSound = loadSound("checkPoint.mp3")
}


function setup(){
createCanvas(600,200)

trex = createSprite(50,180,20,50)

trex.addAnimation("running", trex_running)
trex.addAnimation("collided", trex_collided)

trex.scale = 0.5
ground = createSprite(200,180,400,20)
ground.addImage("ground",groundImage)
ground.x = ground.width/2

gameOver = createSprite(300,100)
gameOver = addImage(gameOverImg)

restart = createSprite(300,140)
restart.addImage(restartImg)

gameOver.scale = 0.5
restart.scale = 0.5

invisibleGround = createSprite(200,190,400,10)
invisibleGround.visible = false

obstaclesGroup = createGroup()
cloudsGroup = createGroup()

trex.setCollider("rectangle",0,0, trex.width, trex.height);
trex.debug = true

score = 0;
}

function draw(){
background(180)

text("Score: "+ score, 500, 45)

if(gameState === PLAY){

gameOver.visible = false
restart.visible = false

trex.changeAnimation("running", trex_running)

ground.velocityX = -(4 + 3* score/100)

score=score + Math.round(frameCount/60)

if(score>0 && score%100 === 0){
    checkPointSound.play()
}
if (ground.x <0){
    ground.x = ground.width/2
}
if (keyDown("space")&& trex.y >=100){
    trex.velocityY = -12
    jumpSound.play()
}
trex.velocityY = trex.velocity
}
}