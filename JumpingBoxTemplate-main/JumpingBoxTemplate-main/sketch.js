var canvas;
var music;
var rect3,rect1,rect2,rect4,ball,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    rect1 = createSprite (0,580,360,30)
    rect1.shapeColor = "red"
    rect2 = createSprite (295,580,200,30)
    rect2.shapeColor = "blue" 
    rect3 = createSprite (515,580,200,30)
    rect3.shapeColor = "orange"
    rect4 = createSprite (740,580,220,30)
    rect4.shapeColor = "green"
     ball = createSprite (random(20,750),100,40,40)
    ball.shapeColor = "black"
    ball.velocityX = 4
    ball.velocityY = 9

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites ()
 ball.bounceOff(edges)
 
 if (rect1.isTouching(ball)&& ball.bounceOff(rect1)){
    ball.shapeColor = "red"
    music.play ()
}
if (rect3.isTouching(ball)&& ball.bounceOff(rect3)){
    ball.shapeColor = "orange"
}
if (rect4.isTouching(ball)&& ball.bounceOff(rect4)){
    ball.shapeColor = "green"
   
}
if (rect2.isTouching (ball)){
    ball.shapeColor = "blue"
    ball.velocityX = 0
    ball.velocityY = 0
    music.stop ()
}
    //add condition to check if box touching surface and make it box
}
