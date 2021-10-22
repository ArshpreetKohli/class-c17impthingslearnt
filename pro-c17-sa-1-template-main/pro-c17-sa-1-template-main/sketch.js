var box,box2
function setup() 
{
  createCanvas(400, 400);
  box=new Box(200,200,15,15,2,-2);
  box2=new Box(250,300,15,15,1.5,2);
}

function draw() 
{
  background(220);
box.show()
box.moveUp()
box2.show()
box2.move()
}

