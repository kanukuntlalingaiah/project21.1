var car,wall,car2,car3,wall2,wall3;
var speed,weight;

function setup() {
  createCanvas(1600,2000);

  car = createSprite(400, 100, 50, 50);
  wall = createSprite(1200,100,40,90);
car2=createSprite(500,400,50,50);
car3=createSprite(600,800,50,50);
wall2=createSprite(1200,400,40,90);
wall3=createSprite(1200,800,40,90);

speed =random(55,90);
weight=random(400,1500);
car.velocityX=speed;
car2.velocityX=speed;
car3.velocityX=speed;
}

function draw() {
  background(255,255,255); 

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;

if(wall2.x-car2<(car2.width+wall2.width)/2){
  car2.velocityX=0;
}

if(wall3.x-car<(car3.width+wall3.width)/2){
car3.velocityX=0;
}

    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor="red";
    }

if(deformation>180){
  car2.shapeColor="red";
}

if(deformation>180){
  car3.shapeColor="red";
}

if(deformation<100 && deformation>100){
  car.shapeColor="green";
}

if(deformation<100 && deformation>100){
  car2.shapeColor="green";
}

if(deformation<100 && deformation>100){
  car3.shapeColor="green";
}

if(deformation<100){
  car.shapeColor="yellow";
}

if(deformation<100){
  car2.shapeColor="yellow";
}

if(deformation<100){
  car3.shapeColor="yellow";
}


  }

  car2.collide(wall2);
  car3.collide(wall3);

  drawSprites();
} 