var canvas,bg;
var together;
var jerry,jerryImg1,jerryImg2;
var tom,tomImg1,tomImg2;
function preload() {
    //load the images here
    bg= loadImage("images/garden.png");
    tomImg1= loadImage("images/cat1.png");
    tomImg2= loadImage("images/cat2.png,images/cat3.png");
    tomImg3= loadImage("images/cat4.png")
    jerryImg1= loadImage("images/mouse1.png");
    jerryImg2= loadImage("images/mouse2.png,images/mouse3.png");
    jerryImg3= loadImage("images/mouse4.png")

}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    createCanvas(600, 600);
    tom = createSprite(870,600);
    tom.addAnimation("catSleeping",catImg1);
    tom.scale=0.2;


    jerry = createSprite(200,600);
    jerry.addAnimation("mouseStanding",mouseImg1);
    jerry.scale=0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x <(tom.width - jerry.width)/2)
    {
        tom.velocityX=0;
        tom.addAnimation("catLastImage",catImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("catLastImage");
        jerry.addAnimation("mouseLastImage",mouseImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("mouseLastImage");
        





    }




    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if(keyCode=== Left_Arrow){
        tom.velocityX =-5;
        tom.addAnimation("catRunning",catImg2);
        tom.changeAnimation("catRunning");


        jerry.addAnimation("jerryTeasing",jerryImg2);
        jerry.frameDelay =25;
        jerry.changeAnimation("jerryTeasing")




    }

}
