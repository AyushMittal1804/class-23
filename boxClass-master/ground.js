class Ground{
    constructor(x,y,width,height,color){
    var options={
   'isStatic': true

    }
    this.color = color;
this.bodies = Bodies.rectangle(x, y, width, height, options);

this.width = width;
this.height = height;
    
World.add(world,this.bodies)
    }
     display(){
    var pos =this.bodies.position;
    
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x,pos.y, this.width, this.height);
    
}
}