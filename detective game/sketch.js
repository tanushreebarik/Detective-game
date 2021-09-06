var officeImage, officeSprite;
var sherlockImage,sherlockSprite;
var telephoneImage, telephoneSprite;
var buttonSprite, buttonImage;
var textBoxSprite, textBoxImage;
var phoneRingSprite, phoneRingImage;
var damagedHouseSprite, damagedHouseImage;
var gamestate = "office";
var scaredGirlSprite, scaredGirlImage;
var carImage, carSprite;
var textBoxHseImage;
var insideHouseImage;

function preload(){

  officeImage = loadImage("images/office.jpeg");
  sherlockImage = loadImage("images/William Gillette - Wikipedia (1).png");
  telephoneImage = loadImage("images/telephone.png");
  buttonImage = loadImage("images/button.png");
  textBoxImage = loadImage("images/text box.png");
  phoneRingImage = loadImage("images/phoneRing.png");
  damagedHouseImage = loadImage("images/damaged house.png");
  scaredGirlImage = loadImage("images/scared girl diana.png");
  carImage = loadImage("images/cid car.png");
  textBoxHseImage = loadImage("images/ text box house.png");
  insideHouseImage = loadImage("images/broken house.png");
}

function setup(){

  createCanvas(1001, 800);
  officeSprite = createSprite(width/2, height/2, width, height);
  officeSprite.addImage("office", officeImage);
  officeSprite.scale = 1.18;

  

  telephoneSprite = createSprite(450, 405);
  telephoneSprite.addImage("telephone", telephoneImage);
  telephoneSprite.scale = 0.09;

  buttonSprite = createSprite(940, 80);
  buttonSprite.addImage("button", buttonImage);
  buttonSprite.scale = 0.2;

  

  phoneRingSprite = createSprite(width/2 - 145, 190);
  phoneRingSprite.addImage("phone", phoneRingImage);
  phoneRingSprite.scale = 0.3;

  damagedHouseSprite = createSprite(width/2, height/2, width, height);
  damagedHouseSprite.addImage("house", damagedHouseImage);
  damagedHouseSprite.addImage("insidehouse", insideHouseImage);
  damagedHouseSprite.visible = false;
  damagedHouseSprite.scale = 2.2;

  textBoxSprite = createSprite(width/2, 200);
  textBoxSprite.addImage("text", textBoxImage);
  textBoxSprite.addImage("texthouse", textBoxHseImage);
  textBoxSprite.scale = 0.8;


  sherlockSprite = createSprite(945, 500);
  sherlockSprite.addImage("sherlock", sherlockImage);
  sherlockSprite.scale = 1;


  scaredGirlSprite = createSprite(width/2 - 150, height - 100);
  scaredGirlSprite.addImage("girl", scaredGirlImage);
  scaredGirlSprite.visible = false;
  scaredGirlSprite.scale = 0.5;

  carSprite = createSprite(width/2 + 350, height - 100);
  carSprite.addImage("car",carImage);
  carSprite.visible = false;
  carSprite.scale = 1.5;
}

function draw(){

  background("black");
  
    
  
  if(mousePressedOver(buttonSprite)){
    gamestate = "house";
    
   
  }

  if(gamestate === "house"){
    destroySprites();

    damagedHouseSprite.visible = true;
    scaredGirlSprite.visible = true;
    carSprite.visible = true;
    sherlockSprite.visible = true;
    sherlockSprite.x = scaredGirlSprite.x + 100;
    sherlockSprite.y = scaredGirlSprite.y;
    sherlockSprite.scale = 0.5;
    textBoxSprite.visible = true;
    textBoxSprite.changeImage("texthouse");
    textBoxSprite.y = height/2 + 100;
    textBoxSprite.x = width/2 - 100;
    textBoxSprite.scale = 0.5;


    textSize(10);
    fill("black");
    text("Diana", scaredGirlSprite.x, textBoxSprite.y);

    if(mousePressedOver(textBoxSprite)){
      gamestate = "insidehouse";

    }
    if(gamestate === "insidehouse"){

        damagedHouseSprite.changeImage("insidehouse");
        sherlockSprite.destroy();
        scaredGirlSprite.destroy();

    }

  }








  drawSprites();
  if(gamestate === "office"){

  textSize(15);
  fill("white");
  text("Speaker : ", textBoxSprite.x - 55, textBoxSprite.y - 30);

  text("hello, i am diana and i am talking", textBoxSprite.x - 65, textBoxSprite.y + 2);
  text("from manchesters lane.", textBoxSprite.x - 65, textBoxSprite.y + 20);
  text("There is a murder in my neighbour...", textBoxSprite.x - 75, textBoxSprite.y + 40);
  text("hhh..house no. 3", textBoxSprite.x - 75, textBoxSprite.y + 60);
}
}
function destroySprites(){


  officeSprite.destroy();
  sherlockSprite.visible = false;
  telephoneSprite.destroy();
  buttonSprite.destroy();
  textBoxSprite.visible = false;
  phoneRingSprite.destroy();


}