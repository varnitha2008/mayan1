var gameState = "start";

//bars
var bar_1 
var bar_2 
var bar_3 
var bar_4 
var bar_5 
var bar_6 
var bar_7 
var bar_8 
var bar_9 
var bar_10 
var bar_11 


function preload(){
  bgimage1 = loadImage("7.jpg");
  bgimage2 = loadImage("1.png");
  avatar1Image = loadImage("boy1.png");
  avatar2Image = loadImage("girl1.png");
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  avatar1 = createSprite(width/2-200,height/2-200,100,100);
  avatar1.shapeColor = "red";
  avatar1.addImage(avatar1Image)
  avatar1.scale=0.6
  avatar1.visible = false;

  avatar2 = createSprite(width/2+200,height/2-200,100,100);
  avatar2.shapeColor = "blue";
  avatar2.addImage(avatar2Image)
  avatar2.scale= 1.5
  avatar2.visible=false;


  //  bar_1 = createSprite(1,200,100,15);
  //  bar_2 = createSprite(15,40,800,5);
  //  bar_3 = createSprite(397,394,10,700);
  //  bar_4 = createSprite(0,394,15,700);
  //  bar_5 = createSprite(4,76,200,5);
  //  bar_6 = createSprite(4,352,400,5); 
  //  bar_7 = createSprite(300,118,400,5);
  //  bar_8 = createSprite(8,168,650,5);
  //  bar_9 = createSprite(394,213,650,5);
  //  bar_10 = createSprite(4,264,680,5);
  //  bar_11 = createSprite(388,314,650,5);

}

function draw(){
 if(gameState === "start"){
  background(bgimage1);

  textSize(30);
  textFont("MV Boli");
  fill("black")
  text("Once upon a time there is a kingdom named Mayan where a evil guy Sam Tailor comes to visit them and  ",width/2-700,height/2-300)
  text("promises to make Mayan a better place.He betrayes them and stole the sacred stone of Mayan and drops it ",width/2-700,height/2-250)
  text("in the ocean as he was attacked by stone. Being a player, you found the stone while fishing next to the river ",width/2-700,height/2-200)
  text("and got to know about the Mayan kingdom, and you have to place the stone in the Mayan kingdom.",width/2-700,height/2-150)
  text("Sam Tailor will create obstacles to you to achieve your mission.",width/2-700,height/2-100)
  //textAlign(left)
  text("                          You get only 4 lives to achieve this. ",width/2-700,height/2-50)
  text("                        Help the people in Mayan Kingdom!!!!",width/2-700,height/2)
  text("                            They are waiting for you!!",width/2-700,height/2+100)
  textFont("Goudy Stout");
  fill ("white");
  textSize(27)
  text("Press SPACE BAR to START the GAME!",width/2-500,height/2+200)
 }
 if(keyDown("space")&&gameState==="start"){
    gameState = "play";
    avatar1.visible=true;
    avatar2.visible=true;
    background(bgimage2);
 }  
  if(gameState=="play"){

    background(bgimage2);

    if(mousePressedOver(avatar1)){
    console.log("avatar 1 is pressed")
    avatar2.destroy();
    avatar1.x=100;
    avatar1.y=100;
 // text("LETS SAVE THE MAYAN",100,100)

}
if(mousePressedOver(avatar2)){
  
  avatar1.destroy();
  avatar2.x=100;
  avatar2.y=100;
  
}
//text("LETS SAVE THE MAYAN",100,100)
  }
 
 drawSprites();

}
