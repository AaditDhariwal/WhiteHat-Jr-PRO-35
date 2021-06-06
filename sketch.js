var dog,dogImg;
var database;
var food=20,foodStock;

function preload()
{
	dogImg=loadImage("dogImg.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800,500);

  dog = createSprite(400,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  

  background("green");

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    food=food-1
  }

  textSize(40);
  fill("white");
  stroke(2);
  text("Food Remaining:"+food,200,100);

  console.log(food);
  drawSprites();


}

function readStock(data){
  food=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


