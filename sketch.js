//Sketch.js|start|
Const world = Matter.World
Const engine = Matter.Engine
Const body = Matter.Body

Var speed,weight,Deformation;
Var car,wall;

Function setup(){
CreateCanvas(1600,400)
speed = random(55.90);
weight = random(400,1500);
car1 = CreateSprite(50,200,50,50)
wall = CreateSprite(1500,200,60,height/2);
car.velocityX = speed;
}

Function draw(){
If (wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0
Deformation = 0.5*weight*speed*speed/22500
If (Deformation>180)
{
car.ShapeColor = color(255,0,0)
}
If (Deformation<180 && Deformation>100)
{
car.ShapeColor = color(230,230,0)
}
If (deformation>100)
{
car.ShapeColor = color(0,255,0)
}
}

car1.display()
wall.display()
}
//Sketch.js|end|
