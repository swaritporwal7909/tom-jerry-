

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    tomimg2=loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png")
    jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png")
    tomimg1=loadAnimation("images/cat1.png")
    jerryimg1=loadAnimation("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom=createSprite(800,700,20,20)
   tom.addAnimation("tomrunning",tomimg1)
   tom.scale=0.1

   jerry=createSprite(50,700,20,20)
   jerry.addAnimation("jerryrunning",jerryimg1)
   jerry.scale=0.1

   
}

function draw() {

    background(bgImg,200,200);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.changeAnimation("happytom",tomimg1)
    tom.velocityX=0
    jerry.changeAnimation("happyjerry",jerryimg1)
    tom.velocityX=0
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

 if(keyCode ==RIGHT_ARROW){
 jerry.addAnimation("mouseTeasing",jerryimg2)
 jerry.changeAnimation("mouseTeasing")

}

if(keyCode ==LEFT_ARROW){
tom.addAnimation("catrunning",tomimg2)
tom.changeAnimation("catrunning")
tom.velocityX=-5
}


}

